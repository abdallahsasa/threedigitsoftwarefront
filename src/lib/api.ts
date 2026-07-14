export async function getProjects(locale: string = 'en', featured: boolean = false) {
  try {
    const url = new URL(`${process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000'}/api/v1/projects`);
    if (featured) {
      url.searchParams.append('featured', 'true');
    }

    const res = await fetch(url.toString(), {
      headers: {
        'Accept-Language': locale,
        'Accept': 'application/json',
      },
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.error('Failed to fetch projects');
      return [];
    }

    const json = await res.json();
    return json.data || [];
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}

export async function getProject(slug: string, locale: string = 'en') {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000'}/api/v1/projects/${slug}`, {
      headers: {
        'Accept-Language': locale,
        'Accept': 'application/json',
      },
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      if (res.status === 404) return null;
      console.error(`Failed to fetch project ${slug}`);
      return null;
    }

    const json = await res.json();
    return json.data || null;
  } catch (error) {
    console.error(`Error fetching project ${slug}:`, error);
    return null;
  }
}

export async function getServices(locale: string = 'en') {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000'}/api/v1/services`, {
      headers: {
        'Accept-Language': locale,
        'Accept': 'application/json',
      },
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.error('Failed to fetch services');
      return [];
    }

    const json = await res.json();
    return json.data || [];
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
}

export async function getService(slug: string, locale: string = 'en') {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000'}/api/v1/services/${slug}`, {
      headers: {
        'Accept-Language': locale,
        'Accept': 'application/json',
      },
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      if (res.status === 404) return null;
      console.error(`Failed to fetch service ${slug}`);
      return null;
    }

    const json = await res.json();
    return json.data || null;
  } catch (error) {
    console.error(`Error fetching service ${slug}:`, error);
    return null;
  }
}

export async function getIndustries(locale: string = 'en') {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000'}/api/v1/industries`, {
      headers: {
        'Accept-Language': locale,
        'Accept': 'application/json',
      },
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.error('Failed to fetch industries');
      return [];
    }

    const json = await res.json();
    return json.data || [];
  } catch (error) {
    console.error('Error fetching industries:', error);
    return [];
  }
}

export async function getPosts(locale: string = 'en') {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000'}/api/v1/posts`, {
      headers: {
        'Accept-Language': locale,
        'Accept': 'application/json',
      },
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.error('Failed to fetch posts');
      return [];
    }

    const json = await res.json();
    return json.data || [];
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}
