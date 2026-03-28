// ===== ENQUIRY FORM SUBMISSION =====
    // Function: handleEnquirySubmit(event)
    // Purpose: Capture enquiry details and redirect with URL parameters for lead tracking
    // Triggers: Form submission from the enquiry section
    function handleEnquirySubmit(event) {
      event.preventDefault();
      const form = event.target;
      const data = new FormData(form);
      const params = new URLSearchParams({
        full_name: data.get('full_name') || '',
        phone: data.get('phone') || '',
        package: data.get('package') || '',
        travel_month: data.get('travel_month') || '',
        pax: data.get('pax') || '',
        agent: '48257001',
        tags: 'travel,enquiry,addeen'
      });
      window.location.href = `/?${params.toString()}`;
    }