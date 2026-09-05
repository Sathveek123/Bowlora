export interface OrderCTAEventData {
  destination: string;
  context: string;
  page?: string;
  label: string;
}

export interface FormSubmitEventData {
  form_type: 'contact' | 'partnership';
  page?: string;
  success: boolean;
}

/**
 * Unified Analytics Manager (GA4 Compatible)
 */
export const analytics = {
  trackOrderCTAClick: (data: OrderCTAEventData) => {
    const page = data.page || (typeof window !== 'undefined' ? window.location.pathname : '/');
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'order_cta_click', {
        destination: data.destination,
        context: data.context,
        page,
        label: data.label,
      });
    } else {
      console.log('[Analytics Event]: order_cta_click', { ...data, page });
    }
  },

  trackFormSubmit: (data: FormSubmitEventData) => {
    const page = data.page || (typeof window !== 'undefined' ? window.location.pathname : '/');
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'form_submit', {
        form_type: data.form_type,
        page,
        success: data.success,
      });
    } else {
      console.log('[Analytics Event]: form_submit', { ...data, page });
    }
  },

  trackPageView: (url: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_path: url,
      });
    }
  },
};
