export {};

declare global {
  interface wpPost {
    id: number;
    date: string;
    date_gmt: string;
    guid: {
      rendered: string;
    };
    modified: string;
    modified_gmt: string;
    slug: string;
    status: string;
    type: string;
    link: string;
    title: {
      rendered: string;
    };
    content: {
      rendered: string;
      protected: boolean;
    };
    excerpt: {
      rendered: string;
      protected: boolean;
    };
    author: number;
    featured_media: number;
    comment_status: string;
    ping_status: string;
    sticky: boolean;
    template: string;
    format: string;
    meta?: {
      footnotes?: string;
    };
    categories?: number[];
    tags?: string[];
  }

  interface wpRecipe {
    id: number;
    date: string;
    date_gmt: string;
    guid: {
      rendered: string;
    };
    modified: string;
    modified_gmt: string;
    slug: string;
    status: string;
    type: string;
    link: string;
    title: {
      rendered: string;
    };
    author: number;
    featured_media: number;
    template: string;
    acm_fields: {
      name: string;
      description: string;
      cover: {
        caption: {
          rendered: string;
        };
        alt_text: string;
        media_type: string;
        mime_type: string;
        media_details: {
          width: number;
          height: number;
          file: string;
          filesize: number;
          sizes: {
            medium?: {
              file?: string;
              width?: number;
              height?: number;
              filesize?: number;
              mime_type?: string;
              source_url?: string;
            };
            thumbnail?: {
              file?: string;
              width?: number;
              height?: number;
              filesize?: number;
              mime_type?: string;
              source_url?: string;
            };
            medium_large?: {
              file?: string;
              width?: number;
              height?: number;
              filesize?: number;
              mime_type?: string;
              source_url?: string;
            };
            full?: {
              file?: string;
              width?: number;
              height?: number;
              mime_type?: string;
              source_url?: string;
            };
          };
          image_meta: {
            aperture: string;
            credit: string;
            camera: string;
            caption: string;
            created_timestamp: string;
            copyright: string;
            focal_length: string;
            iso: string;
            shutter_speed: string;
            title: string;
            orientation: string;
            keywords: Array<string>;
          };
        };
        source_url: string;
      };
      ingredientList: string;
      instructions: string;
      media: Object;
    };
  }
}
