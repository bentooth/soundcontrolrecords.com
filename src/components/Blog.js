import React from 'react';

const Blog = () => {
  return (
    <div className='col-md-8'>
      <br />
      <h2>
        <a href='#' id='spot'>
          NIGHT DRIVE SINGLE RELEASED!
        </a>
      </h2>
      <p>by Ben</p>
      <img
        className='img-responsive center-block'
        src='images/ND-RiseFall.jpg'
        role='presentation'
      />
      <br />

      <p id='blog'>
        <br />
        With a wonderful premiere from SPIN magazine and support from online
        publications such as Acid Stag, High Clouds & Austin Town Hall, our team
        is proud to release and distribute Night Drive’s latest single “Rise and
        Fall” off their debut album! Soon to be released by Los Angeles based
        label Roll Call Records.
        <br />
        <br />
        <p id='quote'>
          <i>
            "True to the Night Drive ethos, the song boasts exactly the kind of
            glossy, echoed Interpol and Lower Dens vibes that are ideal to put
            on while rocketing down the interstate at 90mph in the dead of
            night"
          </i>
          &nbsp;&nbsp;-SPIN Magazine
        </p>
        <br />
        The band explains,
        <i>
          "'Rise and Fall' is about unexpected change as two people find
          themselves going in different directions. A sudden and untimely
          break-up."
        </i>
        <br />
        <br />
        We are ecstatic about their current trajectory and can’t wait for you to
        see and hear what the future holds for Night Drive!
      </p>

      <br />
      <iframe
        width='100%'
        height='450'
        scrolling='no'
        frameBorder='no'
        src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293434916&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true'
      ></iframe>
      <hr />
      <br />
    </div>
  );
};

export default Blog;
