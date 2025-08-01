import sharp from "sharp";

const generateLQIP = async (imageUrl: string) => {
  try {
    const response = await fetch(imageUrl);
    if (!response.ok)
      throw new Error(`Failed to fetch: ${response.statusText}`);
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const lqipBuffer = await sharp(buffer)
      .resize(30, 30, {
        fit: "inside",
        withoutEnlargement: true,
      })
      .blur()
      .jpeg({
        mozjpeg: true,
      })
      .toBuffer();

    const lqipDataUrl = `data:image/jpeg;base64,${lqipBuffer.toString("base64")}`;

    const urlObj = new URL(imageUrl);
    const fileName = urlObj.pathname.split("/").pop() || "unknown-file";

    console.log(
      `Generated LQIP for ${fileName}: ${(lqipBuffer.length / 1024).toFixed(2)} KB`,
    );

    return lqipDataUrl;
  } catch (error) {
    console.error("Error generating LQIP Data URL for image:", imageUrl, error);
    return "";
  }
};

export default generateLQIP;
