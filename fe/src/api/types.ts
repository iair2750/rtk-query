export interface User {
  id: string;
  name: string;
  createdAt: string;
  avatar: string;
  jobId: string;
}

export interface Job {
  id: string;
  createdAt: string;
  title: string;
  type: string;
  area: string;
  description: string;
}
