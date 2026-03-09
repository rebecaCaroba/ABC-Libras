const imageModules = import.meta.glob("../assets/abc/*.png", {
  eager: true,
  import: "default",
}) as Record<string, string>

export const letterToImage = Object.entries(imageModules).reduce<Record<string, string>>(
  (acc, [path, imageUrl]) => {
    const fileName = path.split("/").pop() ?? ""
    const letter = fileName.replace(".png", "").toUpperCase()
    acc[letter] = imageUrl
    return acc
  },
  {}
)