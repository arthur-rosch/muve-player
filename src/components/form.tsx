import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_LEAD_FORM } from '../querys';
import type { VideoForm } from "../types";

// Input Component
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = ({ error, className = "", ...props }: InputProps) => {
  return (
    <div className="relative">
      <input
        {...props}
        className={`
          w-full px-4 py-2.5
          bg-white/5 hover:bg-white/10
          border border-blue-500/20 hover:border-blue-500/30
          text-white placeholder-white/60
          rounded-lg
          focus:outline-none focus:ring-2 focus:ring-blue-500/30
          transition-all duration-200
          backdrop-blur-sm
          ${error ? "border-red-500/50 focus:ring-red-500/30" : ""}
          ${className}
        `}
      />
      {error && (
        <p className="absolute -bottom-6 left-0 text-sm text-red-400/90">{error}</p>
      )}
    </div>
  );
};

// Button Component
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  isLoading?: boolean;
}

const Button = ({
  children,
  variant = "primary",
  isLoading,
  className = "",
  ...props
}: ButtonProps) => {
  const variants = {
    primary: `bg-blue-600 hover:bg-blue-500 border border-blue-400/30 
              hover:border-blue-400/50 text-white`,
    secondary: `bg-white/10 hover:bg-white/20 border border-white/10 
                hover:border-white/20 text-white/90 hover:text-white`,
  };

  return (
    <button
      {...props}
      className={`
        px-6 py-2.5 rounded-lg 
        transition-all duration-200
        font-medium backdrop-blur-sm
        hover:shadow-lg hover:-translate-y-0.5
        active:translate-y-0
        disabled:opacity-50 disabled:hover:translate-y-0
        ${variants[variant]}
        ${isLoading ? "cursor-wait" : ""}
        ${className}
      `}
      disabled={isLoading || props.disabled}
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        </div>
      ) : (
        children
      )}
    </button>
  );
};

// Form Hook
const useVideoForm = (videoForm: VideoForm, onClose: () => void, onPlay: () => void) => {
  const [createLeadForm, { loading }] = useMutation(CREATE_LEAD_FORM);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (videoForm.inputName && !formData.name?.trim()) {
      newErrors.name = "Nome é obrigatório";
    }

    if (videoForm.inputEmail) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.email?.trim()) {
        newErrors.email = "Email é obrigatório";
      } else if (!emailRegex.test(formData.email)) {
        newErrors.email = "Email inválido";
      }
    }

    if (videoForm.inputPhone && !formData.phone?.trim()) {
      newErrors.phone = "Telefone é obrigatório";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleFormSubmit = async () => {
    if (!validateForm()) return;
    try {
      await createLeadForm({
        variables: {
          formId: videoForm.id,
          videoId: videoForm.videoId,
          data: {
            name: formData.name || "",
            phone: formData.phone || "",
            email: formData.email || "",
          },
        },
      });
      onPlay()
      onClose();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return {
    formData,
    errors,
    loading,
    handleInputChange,
    handleFormSubmit,
  };
};

// Main Modal Component
export interface VideoFormModalProps {
  videoForm: VideoForm;
  onClose: () => void;
  onPlay: () => void;
}

export const VideoFormModal = ({
  videoForm,
  onClose,
  onPlay
}: VideoFormModalProps) => {
  const {
    formData,
    errors,
    loading,
    handleInputChange,
    handleFormSubmit,
  } = useVideoForm(videoForm, onClose, onPlay);

  return (
    <>
      {/* Background overlay */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-[2px] z-20 animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      {/* Modal content */}
      <div className="w-full absolute inset-0 flex items-center justify-center z-30">
        <div 
          className="bg-black/80 backdrop-blur-md border border-blue-500/20  w-full
                     text-white p-8 rounded-xl shadow-2xl max-w-md mx-4
                     animate-in fade-in slide-in-from-bottom-4 duration-500"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-lg font-medium tracking-wide text-white mb-6">
            Preencha as informações
          </h2>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            {videoForm.inputName && (
              <Input
                type="text"
                placeholder="Nome"
                value={formData.name || ""}
                onChange={(e) => handleInputChange("name", e.target.value)}
                error={errors.name}
              />
            )}
            
            {videoForm.inputEmail && (
              <Input
                type="email"
                placeholder="Email"
                value={formData.email || ""}
                onChange={(e) => handleInputChange("email", e.target.value)}
                error={errors.email}
              />
            )}
            
            {videoForm.inputPhone && (
              <Input
                type="tel"
                placeholder="Telefone"
                value={formData.phone || ""}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                error={errors.phone}
              />
            )}

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              {onClose && (
                <Button
                  variant="secondary"
                  onClick={onClose}
                  className="flex-1"
                >
                  Cancelar
                </Button>
              )}
              
              <Button
                onClick={handleFormSubmit}
                className="flex-1"
                isLoading={loading}
              >
                Enviar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};