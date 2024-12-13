export function convertDurationToSeconds(duration: string): number {
  const timeParts = duration.split(':').map((part) => Number(part.trim()))

  
  if (timeParts.some(isNaN)) {
    return 0 
  }

  let totalSeconds = 0

  
  if (timeParts.length === 2) {
    const [minutes, seconds] = timeParts
    totalSeconds = minutes * 60 + seconds
  }
  
  else if (timeParts.length === 3) {
    const [hours, minutes, seconds] = timeParts
    totalSeconds = hours * 3600 + minutes * 60 + seconds
  } else {
    console.error('Formato inválido. Use hh:mm:ss ou mm:ss')
    return 0
  }

  return totalSeconds
}