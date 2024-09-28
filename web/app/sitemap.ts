import { client } from "@/lib/sanity";
import { MetadataRoute } from "next";

export function getPostsSitemapInfo() {
    client.fetch(`*[_type == "movie"]`)
}

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://sammaji.tech",
            priority: 0.8,
            lastModified: new Date(),
            changeFrequency: "monthly"
        },
    ]
}
