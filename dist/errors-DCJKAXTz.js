import { P as a, c as t } from "./prod-DTLJXtPo.js";
const i = {
  r() {
    return new a({
      code: t.BadSignature,
      reason: "missing WEBVTT file header",
      line: 1
    });
  },
  s(n, e) {
    return new a({
      code: t.BadTimestamp,
      reason: `cue start timestamp \`${n}\` is invalid on line ${e}`,
      line: e
    });
  },
  t(n, e) {
    return new a({
      code: t.BadTimestamp,
      reason: `cue end timestamp \`${n}\` is invalid on line ${e}`,
      line: e
    });
  },
  u(n, e, r) {
    return new a({
      code: t.BadTimestamp,
      reason: `cue end timestamp \`${e}\` is greater than start \`${n}\` on line ${r}`,
      line: r
    });
  },
  y(n, e, r) {
    return new a({
      code: t.BadSettingValue,
      reason: `invalid value for cue setting \`${n}\` on line ${r} (value: ${e})`,
      line: r
    });
  },
  x(n, e, r) {
    return new a({
      code: t.UnknownSetting,
      reason: `unknown cue setting \`${n}\` on line ${r} (value: ${e})`,
      line: r
    });
  },
  w(n, e, r) {
    return new a({
      code: t.BadSettingValue,
      reason: `invalid value for region setting \`${n}\` on line ${r} (value: ${e})`,
      line: r
    });
  },
  v(n, e, r) {
    return new a({
      code: t.UnknownSetting,
      reason: `unknown region setting \`${n}\` on line ${r} (value: ${e})`,
      line: r
    });
  },
  // SSA-specific errors
  T(n, e) {
    return new a({
      code: t.BadFormat,
      reason: `format missing for \`${n}\` block on line ${e}`,
      line: e
    });
  }
};
export {
  i as ParseErrorBuilder
};
