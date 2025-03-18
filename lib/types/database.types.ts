// This file will be replaced with the actual database schema types from Supabase
// For now, we'll use a placeholder type
export type Database = {
  public: {
    Tables: {
      organizations: {
        Row: {
          id: string;
          name: string;
          created_at: string;
          subdomain: string;
          branding_logo?: string;
          branding_primary_color?: string;
          branding_secondary_color?: string;
          subscription_tier: 'free' | 'business' | 'enterprise';
        };
        Insert: {
          id?: string;
          name: string;
          created_at?: string;
          subdomain: string;
          branding_logo?: string;
          branding_primary_color?: string;
          branding_secondary_color?: string;
          subscription_tier?: 'free' | 'business' | 'enterprise';
        };
        Update: {
          id?: string;
          name?: string;
          created_at?: string;
          subdomain?: string;
          branding_logo?: string;
          branding_primary_color?: string;
          branding_secondary_color?: string;
          subscription_tier?: 'free' | 'business' | 'enterprise';
        };
      };
      users: {
        Row: {
          id: string;
          email: string;
          organization_id: string;
          role: 'admin' | 'staff' | 'onboardee';
          created_at: string;
          full_name?: string;
          profile_image?: string;
        };
        Insert: {
          id?: string;
          email: string;
          organization_id: string;
          role?: 'admin' | 'staff' | 'onboardee';
          created_at?: string;
          full_name?: string;
          profile_image?: string;
        };
        Update: {
          id?: string;
          email?: string;
          organization_id?: string;
          role?: 'admin' | 'staff' | 'onboardee';
          created_at?: string;
          full_name?: string;
          profile_image?: string;
        };
      };
      workflows: {
        Row: {
          id: string;
          name: string;
          organization_id: string;
          created_at: string;
          updated_at: string;
          steps: any;
          is_active: boolean;
        };
        Insert: {
          id?: string;
          name: string;
          organization_id: string;
          created_at?: string;
          updated_at?: string;
          steps?: any;
          is_active?: boolean;
        };
        Update: {
          id?: string;
          name?: string;
          organization_id?: string;
          created_at?: string;
          updated_at?: string;
          steps?: any;
          is_active?: boolean;
        };
      };
      onboardings: {
        Row: {
          id: string;
          workflow_id: string;
          user_id: string;
          organization_id: string;
          status: 'pending' | 'in_progress' | 'completed' | 'rejected';
          progress: any;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          workflow_id: string;
          user_id: string;
          organization_id: string;
          status?: 'pending' | 'in_progress' | 'completed' | 'rejected';
          progress?: any;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          workflow_id?: string;
          user_id?: string;
          organization_id?: string;
          status?: 'pending' | 'in_progress' | 'completed' | 'rejected';
          progress?: any;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
    Views: {};
    Functions: {};
  };
}; 