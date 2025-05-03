import { createClient, Entry } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export const getBlogPosts = async () =>  {
  const entries = await client.getEntries({ content_type: 'blgoPost' });
  return entries.items;
}
export const getExperience = async () => {
  const experience = await client.getEntries({ content_type: `experience`});
  return experience.items;
}

export const getProjects = async () => {
  const projects = await client.getEntries({ content_type: `projects`});
  return projects.items;
}

export const getBlogPost = async (id:string) => {
  const entries = await client.getEntries({
    content_type: 'blgoPost',
    'sys.id': id,
    limit: 1
  });
  return entries.items[0];
}

export const getProject = async (id: string) => {
  const entries = await client.getEntries({
    content_type: `projects`,
    'sys.id': id,
    limit: 1
  });
  return entries.items[0];
}