import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
    projectId: 'ze9lnowq', // Replace with your actual project ID
    dataset: 'production', // Replace with your actual dataset name
    apiVersion: '2023-05-25', // Use the latest API version or a specific one you prefer
    useCdn: true, // Set to true to use the CDN for faster response times
});

const builder = imageUrlBuilder(client);

function urlFor(source) {
    return builder.image(source);
}

export { client, urlFor };
