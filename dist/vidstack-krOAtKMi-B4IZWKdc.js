const g = /(?:https:\/\/)?(?:player\.)?vimeo(?:\.com)?\/(?:video\/)?(\d+)(?:(?:\?hash=|\?h=|\/)(.*))?/, c = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
function b(n) {
  const o = n.match(g);
  return { videoId: o == null ? void 0 : o[1], hash: o == null ? void 0 : o[2] };
}
async function w(n, o, r) {
  if (c.has(n)) return c.get(n);
  if (i.has(n)) return i.get(n);
  let t = `https://vimeo.com/api/oembed.json?url=https://player.vimeo.com/video/${n}`;
  r && (t = t.concat(`?h=${r}`));
  const s = window.fetch(t, {
    mode: "cors",
    signal: o.signal
  }).then((e) => e.json()).then((e) => {
    var l, p;
    const u = /vimeocdn.com\/video\/(.*)?_/, h = (p = (l = e == null ? void 0 : e.thumbnail_url) == null ? void 0 : l.match(u)) == null ? void 0 : p[1], f = h ? `https://i.vimeocdn.com/video/${h}_1920x1080.webp` : "", m = {
      title: (e == null ? void 0 : e.title) ?? "",
      duration: (e == null ? void 0 : e.duration) ?? 0,
      poster: f,
      pro: e.account_type !== "basic"
    };
    return c.set(n, m), m;
  }).finally(() => i.delete(n));
  return i.set(n, s), s;
}
export {
  w as getVimeoVideoInfo,
  b as resolveVimeoVideoId
};
//# sourceMappingURL=vidstack-krOAtKMi-B4IZWKdc.js.map