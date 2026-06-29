const VISIBILITY_TIMEOUT_MS = 1500;

// Copies the Story background to the clipboard and attempts to open
// Instagram's Story camera directly via its private iOS URL scheme,
// skipping the OS share sheet. Resolves true if the page appears to have
// been backgrounded (Instagram likely opened), false if it's still visible
// after the timeout (Instagram probably isn't installed).
//
// Note: unlike the Web Share API path, this can only pre-fill the
// background image — Instagram's link sticker requires a native pasteboard
// key (com.instagram.sharedSticker.contentURL) that the web Clipboard API
// has no way to write.
export async function tryOpenInstagramStoryDirectly(
  blob: Blob,
  appId: string
): Promise<boolean> {
  if (!navigator.clipboard?.write || typeof ClipboardItem === "undefined") {
    return false;
  }

  await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);

  return new Promise((resolve) => {
    let settled = false;

    const finish = (result: boolean) => {
      if (settled) return;
      settled = true;
      document.removeEventListener("visibilitychange", onVisibilityChange);
      resolve(result);
    };

    const onVisibilityChange = () => {
      if (document.hidden) finish(true);
    };

    document.addEventListener("visibilitychange", onVisibilityChange);
    window.location.href = `instagram-stories://share?source_application=${appId}`;
    setTimeout(() => finish(false), VISIBILITY_TIMEOUT_MS);
  });
}
