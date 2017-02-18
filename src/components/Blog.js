import React from 'react'

const Blog = () => {
    return (
        <div className="col-md-8">
            <br/>
            <h2>
                <a href="#">NIGHT DRIVE SINGLE RELEASED!</a>
            </h2>
            <p>
                by Ben
            </p>
            <img className="img-responsive" src="images/ND.jpg" role="presentation"></img><br />
            <p>The Fourier transform decomposes a function of time (a signal) into the frequencies that make it up,
                in a way similar to how a musical chord can be expressed as the frequencies (or pitches) of its
                constituent notes. The Fourier transform of a function of time itself is a complex-valued function
                of frequency, whose absolute value represents the amount of that frequency present in the original
                function, and whose complex argument is the phase offset of the basic sinusoid in that frequency.
                The Fourier transform is called the frequency domain representation of the original signal.
            </p>
            <br />
            <iframe width="100%" height="450" scrolling="no" frameborder="no"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293434916&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
            <hr />
            <br />
        </div>
    )
};

export default Blog;

