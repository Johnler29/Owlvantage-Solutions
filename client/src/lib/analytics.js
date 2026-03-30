/**
 * Analytics Setup for Owlvantage Solutions
 * Tracks user interactions, page views, and custom events
 */

class Analytics {
  constructor() {
    this.sessionId = this.generateSessionId();
    this.userId = this.getUserId();
    this.events = [];
    this.pageViews = [];
    this.initializeGoogleAnalytics();
    this.initializeLocalTracking();
  }

  /**
   * Generate unique session ID
   */
  generateSessionId() {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Get or create user ID
   */
  getUserId() {
    let userId = localStorage.getItem("analyticsUserId");
    if (!userId) {
      userId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem("analyticsUserId", userId);
    }
    return userId;
  }

  /**
   * Initialize Google Analytics (GTM/GA4)
   */
  initializeGoogleAnalytics() {
    // Google Analytics 4 initialization
    if (window.gtag) {
      window.gtag("config", "GA_MEASUREMENT_ID", {
        user_id: this.userId,
        session_id: this.sessionId,
      });
    }

    // Alternative: Google Tag Manager
    if (window.dataLayer) {
      window.dataLayer.push({
        event: "page_view",
        user_id: this.userId,
        session_id: this.sessionId,
      });
    }
  }

  /**
   * Initialize local tracking
   */
  initializeLocalTracking() {
    // Track page visibility
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        this.trackEvent("page_hidden", {
          timestamp: new Date().toISOString(),
        });
      } else {
        this.trackEvent("page_visible", {
          timestamp: new Date().toISOString(),
        });
      }
    });

    // Track user activity
    document.addEventListener("click", (e) => {
      this.trackUserInteraction("click", e);
    });

    document.addEventListener("scroll", () => {
      this.trackUserInteraction("scroll", {
        scrollY: window.scrollY,
        scrollX: window.scrollX,
      });
    });
  }

  /**
   * Track page view
   */
  trackPageView(pageName, pageData = {}) {
    const pageView = {
      id: this.generateSessionId(),
      pageName,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      referrer: document.referrer,
      ...pageData,
    };

    this.pageViews.push(pageView);

    // Send to Google Analytics
    if (window.gtag) {
      window.gtag("event", "page_view", {
        page_title: pageName,
        page_path: window.location.pathname,
      });
    }

    // Log to console in development
    if (process.env.NODE_ENV === "development") {
      console.log("📊 Page View:", pageView);
    }

    return pageView;
  }

  /**
   * Track custom event
   */
  trackEvent(eventName, eventData = {}) {
    const event = {
      id: this.generateSessionId(),
      eventName,
      timestamp: new Date().toISOString(),
      userId: this.userId,
      sessionId: this.sessionId,
      ...eventData,
    };

    this.events.push(event);

    // Send to Google Analytics
    if (window.gtag) {
      window.gtag("event", eventName, eventData);
    }

    // Log to console in development
    if (process.env.NODE_ENV === "development") {
      console.log(`📊 Event: ${eventName}`, event);
    }

    return event;
  }

  /**
   * Track user interaction
   */
  trackUserInteraction(interactionType, data = {}) {
    const interaction = {
      type: interactionType,
      timestamp: new Date().toISOString(),
      target: data.target?.tagName || "unknown",
      ...data,
    };

    // Send to Google Analytics
    if (window.gtag) {
      window.gtag("event", `user_interaction_${interactionType}`, interaction);
    }

    // Throttle console logging for scroll events
    if (interactionType !== "scroll" && process.env.NODE_ENV === "development") {
      console.log(`📊 Interaction: ${interactionType}`, interaction);
    }
  }

  /**
   * Track form submission
   */
  trackFormSubmission(formName, formData = {}) {
    const event = {
      eventName: "form_submission",
      formName,
      timestamp: new Date().toISOString(),
      userId: this.userId,
      ...formData,
    };

    this.events.push(event);

    if (window.gtag) {
      window.gtag("event", "form_submission", {
        form_name: formName,
        ...formData,
      });
    }

    console.log("📊 Form Submitted:", event);
    return event;
  }

  /**
   * Track lead capture
   */
  trackLeadCapture(leadData = {}) {
    const event = {
      eventName: "lead_captured",
      timestamp: new Date().toISOString(),
      userId: this.userId,
      ...leadData,
    };

    this.events.push(event);

    if (window.gtag) {
      window.gtag("event", "lead_captured", leadData);
    }

    console.log("📊 Lead Captured:", event);
    return event;
  }

  /**
   * Track blog post view
   */
  trackBlogPostView(postId, postTitle) {
    const event = {
      eventName: "blog_post_view",
      postId,
      postTitle,
      timestamp: new Date().toISOString(),
      userId: this.userId,
    };

    this.events.push(event);

    if (window.gtag) {
      window.gtag("event", "blog_post_view", {
        post_id: postId,
        post_title: postTitle,
      });
    }

    console.log("📊 Blog Post Viewed:", event);
    return event;
  }

  /**
   * Track button click
   */
  trackButtonClick(buttonName, buttonData = {}) {
    const event = {
      eventName: "button_click",
      buttonName,
      timestamp: new Date().toISOString(),
      userId: this.userId,
      ...buttonData,
    };

    this.events.push(event);

    if (window.gtag) {
      window.gtag("event", "button_click", {
        button_name: buttonName,
        ...buttonData,
      });
    }

    if (process.env.NODE_ENV === "development") {
      console.log("📊 Button Clicked:", event);
    }

    return event;
  }

  /**
   * Track time on page
   */
  trackTimeOnPage(pageName, timeInSeconds) {
    const event = {
      eventName: "time_on_page",
      pageName,
      timeInSeconds,
      timestamp: new Date().toISOString(),
      userId: this.userId,
    };

    this.events.push(event);

    if (window.gtag) {
      window.gtag("event", "time_on_page", {
        page_name: pageName,
        time_seconds: timeInSeconds,
      });
    }

    console.log("📊 Time on Page:", event);
    return event;
  }

  /**
   * Track error
   */
  trackError(errorMessage, errorData = {}) {
    const event = {
      eventName: "error",
      errorMessage,
      timestamp: new Date().toISOString(),
      userId: this.userId,
      ...errorData,
    };

    this.events.push(event);

    if (window.gtag) {
      window.gtag("event", "exception", {
        description: errorMessage,
        ...errorData,
      });
    }

    console.error("📊 Error Tracked:", event);
    return event;
  }

  /**
   * Get analytics summary
   */
  getAnalyticsSummary() {
    return {
      sessionId: this.sessionId,
      userId: this.userId,
      totalEvents: this.events.length,
      totalPageViews: this.pageViews.length,
      events: this.events,
      pageViews: this.pageViews,
      sessionDuration: this.getSessionDuration(),
    };
  }

  /**
   * Get session duration in seconds
   */
  getSessionDuration() {
    if (this.pageViews.length === 0) return 0;
    const firstPageView = new Date(this.pageViews[0].timestamp);
    const lastPageView = new Date(
      this.pageViews[this.pageViews.length - 1].timestamp
    );
    return Math.round((lastPageView - firstPageView) / 1000);
  }

  /**
   * Export analytics data
   */
  exportAnalytics() {
    const data = {
      ...this.getAnalyticsSummary(),
      exportedAt: new Date().toISOString(),
    };

    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `analytics_${this.sessionId}.json`;
    link.click();

    return data;
  }

  /**
   * Clear analytics data
   */
  clearAnalytics() {
    this.events = [];
    this.pageViews = [];
    console.log("📊 Analytics data cleared");
  }
}

// Create singleton instance
const analytics = new Analytics();

export default analytics;
