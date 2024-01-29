import React, { useState, useEffect, useRef  } from 'react';

const ContactForm = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const contactFormRef = useRef(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowContactForm(false);

      // This is where you set the aria-label without jQuery
      document.querySelectorAll('.btn-light').forEach(element => {
        element.setAttribute('aria-label', 'Contact Details');
      });
    });

    // Clear the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (contactFormRef.current && !contactFormRef.current.contains(event.target)) {
        setShowContactForm(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, [contactFormRef]);

  const toggleContactForm = () => {
    setShowContactForm(prevState => !prevState);
  };

  
  return (
    
    <li className="HddrBtns co web_menu_btn_sec" ref={contactFormRef}>
    <button
      className="btn menu_btn button_christ"
      id="proposal_btn"
      onClick={toggleContactForm}
    >
      {showContactForm ? 'GET A PROPOSAL' : 'GET A PROPOSAL'}{' '}
      <img
        src="https://www.osiztechnologies.com/asset/img/reindeer.webp"
        className="img-fluid raindeer_img"
        alt="raindeer-img"
        width="22"
        height="22"
      />
    </button>

      <article className="contact_form_mainsec" id="contact_form_main" style={{ display: showContactForm ? "block" : "none" }}>
        <div className="topNewContact">
          <p className="" >Let's quickly bond.</p>
        </div>
        <div className="contact_form_sec">
          <form className="fitoutform" id="side_contact_form" method="post" noValidate="novalidate" >
          <div class="row">
                      <div class="col-lg-12 col-12 form-group">
                        <input type="text" class="form-control" name="contact_name" placeholder="Enter Your Name"/>
                      </div>
                                            <input type="hidden" class="form-control" value="header_proposal_form_home" name="category_name"/>
                      <div class="col-lg-12 col-12 form-group">
                        <input type="text" class="form-control" name="email" placeholder="Enter Your Email"/>
                      </div>
                        <div class="selecpicker_input_group_div">
                        <input type="number" class="form-control" name="number" placeholder="Enter Your Number"/>

                      </div>
                      
                      <div class="col-lg-12 form-group msg_div" style={{marginTop:"15px"}}>
                        <textarea name="message" class="form-control" rows="3" id="header_proposal_msg" placeholder="Enter your subject"></textarea>
                      </div>
                      <div class="col-lg-12 form-group text-center">
                        <div id="side_contact_form_error_msg"></div>
                        <button class="btn side_contact_submit_btn" type="Submit" aria-label="Submit" id="side_contact_submit_btn">Submit</button>
                      </div>
                    </div>          
          </form>
        </div>
      </article>

      {/* Your script tag */}
      <script type="text/javascript">
        {`
          setTimeout(function () {
            $(window).on('load', function () {
              $('.btn-light').attr("aria-label", "Contact Details");
            });
          }, 2000);
        `}
      </script>
    </li>
  );
};

export default ContactForm;
