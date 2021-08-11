function McForm2() {
    return (
      <div className ="Form-flexbox-container" id="contact-form">
      <div className="Contact-card">
      {/* Begin Mailchimp Signup Form */}
      <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css" />
      <style type="text/css" dangerouslySetInnerHTML={{__html: "\n\t#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }\n\t/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.\n\t   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */\n" }} />
      <style type="text/css" dangerouslySetInnerHTML={{__html: "\n\t#mc-embedded-subscribe-form input[type=checkbox]{display: inline; width: auto;margin-right: 10px;}\n\t#mergeRow-gdpr {margin-top: 20px;}\n\t#mergeRow-gdpr fieldset label {font-weight: normal;}\n\t#mc-embedded-subscribe-form .mc_fieldset{border:none;min-height: 0px;padding-bottom:0px;}\n" }} />
      <div id="mc_embed_signup">
        <form action="" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
          <div id="mc_embed_signup_scroll">
            <h2>Book a Demo</h2>
            {/* <div className="indicates-required"><span className="asterisk">*</span> indicates required</div> */}
            <div className="mc-field-group">
              {/* <label htmlFor="mce-EMAIL">Email Address  <span className="asterisk">*</span>
              </label> */}
              <input type="email" placeholder="Email"  name="EMAIL" className="required email" id="mce-EMAIL" />
            </div>
            <div className="mc-field-group">
              {/* <label htmlFor="mce-FNAME">First Name  <span className="asterisk">*</span>
              </label> */}
              <input type="text" placeholder="First Name" name="FNAME" className="required" id="mce-FNAME" />
            </div>
            <div className="mc-field-group">
              {/* <label htmlFor="mce-LNAME">Last Name  <span className="asterisk">*</span>
              </label> */}
              <input type="text" placeholder="Last Name" name="LNAME" className="required" id="mce-LNAME" />
            </div>
            <div className="mc-field-group">
              {/* <label htmlFor="mce-COMPANY">Company Name  <span className="asterisk">*</span>
              </label> */}
              <input type="text" placeholder="Company Name" name="COMPANY" className="required" id="mce-COMPANY" />
            </div>
            <div className="mc-field-group">
              {/* <label htmlFor="mce-PHONE">Phone Number  <span className="asterisk">*</span>
              </label> */}
              <input type="text" placeholder="Phone Number"  name="PHONE" className="required" id="mce-PHONE" />
            </div>
            <div id="mergeRow-gdpr" className="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group">
              <div className="content__gdpr">
                <h3>GDPR</h3>
                <p>Please select the ways we can reach out to you.</p>
                <br/>
                <fieldset className="mc_fieldset gdprRequired mc-field-group" name="interestgroup_field">
                  <label className="checkbox subfield" htmlFor="gdpr_72894"><input type="checkbox" id="gdpr_72894" name="gdpr[72894]" defaultValue="Y" className="av-checkbox gdpr" /><span>Email</span> </label><label className="checkbox subfield" htmlFor="gdpr_72898"><input type="checkbox" id="gdpr_72898" name="gdpr[72898]" defaultValue="Y" className="av-checkbox gdpr" /><span>Phone</span> </label>
                </fieldset>
                <br/>
                <p>By clicking below, you agree that we may process your information for communication purposes.</p>
              </div>
              <div className="content__gdprLegal">
                <br/>
                <p>We use Mailchimp as our marketing platform. By clicking below to subscribe, you acknowledge that your information will be transferred to Mailchimp for processing. </p>
                <br/>
                <a href="https://mailchimp.com/legal/" target="_blank">Learn more about Mailchimp's privacy practices here.</a>
              </div>
            </div>
            <div id="mce-responses" className="clear">
              <div className="response" id="mce-error-response" style={{display: 'none'}} />
              <div className="response" id="mce-success-response" style={{display: 'none'}} />
            </div>    {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
            <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_360dbd003d38361078c8edc4f_49fb4f2a14" tabIndex={-1} defaultValue /></div>
            <div className="clear"><input type="submit" defaultValue="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
          </div>
        </form>
      </div>
    </div>
    </div>
    );
  };

  export default McForm2;