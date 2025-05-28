
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface Project {
  id: string;
  title: string;
  description: string;
  long_description: string | null;
  image_url: string;
  demo_url: string | null;
  github_url: string | null;
  client: string | null;
  duration: string | null;
  year: number | null;
  featured: boolean;
  category: {
    id: string;
    name: string;
    label: string;
  };
  technologies: {
    id: string;
    name: string;
  }[];
  project_images: {
    id: string;
    image_url: string;
    alt_text: string | null;
    order_index: number;
  }[];
}

export const useProjects = () => {
  return useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('projects')
        .select(`
          *,
          category:categories(id, name, label),
          technologies:project_technologies(
            technology:technologies(id, name)
          ),
          project_images(id, image_url, alt_text, order_index)
        `)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching projects:', error);
        throw error;
      }

      // Transform the data to match our interface
      return data.map(project => ({
        ...project,
        technologies: project.technologies?.map(pt => pt.technology) || [],
        project_images: project.project_images?.sort((a, b) => a.order_index - b.order_index) || []
      })) as Project[];
    },
  });
};

export const useProject = (id: string) => {
  return useQuery({
    queryKey: ['project', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('projects')
        .select(`
          *,
          category:categories(id, name, label),
          technologies:project_technologies(
            technology:technologies(id, name)
          ),
          project_images(id, image_url, alt_text, order_index)
        `)
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching project:', error);
        throw error;
      }

      // Transform the data to match our interface
      return {
        ...data,
        technologies: data.technologies?.map(pt => pt.technology) || [],
        project_images: data.project_images?.sort((a, b) => a.order_index - b.order_index) || []
      } as Project;
    },
    enabled: !!id,
  });
};
