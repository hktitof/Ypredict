import React from 'react'
/* eslint-disable @next/next/no-img-element */
export default function PlatformFeature() {
  return (
    <div className="platform-feature-section">
            <div className="features-section">

                <div className="platform-feature-title">Platform Features<br /> of yPredict.ai</div>
                <div className="feature-section">

                    <div className="feature-box">
                        <div className="feature-checkbox checked"></div>
                        <div className="feature-text"><b>AI Signals -</b> real-time trading signals from cutting edge
                            predictive models by top 1% AI experts.</div>
                    </div>


                    <div className="feature-box">
                        <div className="feature-checkbox checked"></div>
                        <div className="feature-text"><b>25+ Chart Pattern Recognition -</b> Real-time alert on chart
                            patterns, fibonacci patterns, breakout patterns, etc.</div>
                    </div>


                    <div className="feature-box">
                        <div className="feature-checkbox checked"></div>
                        <div className="feature-text"><b>Technical Analysis by AI -</b> Let AI find the most effective
                            indicators for your asset.</div>
                    </div>

                    <div className="feature-box">
                        <div className="feature-checkbox checked"></div>
                        <div className="feature-text"><b>Sentiment Analysis -</b> NLP detects true sentiment on social media
                            and news for your favorite coin </div>
                    </div>

                    <div className="feature-box">
                        <div className="feature-checkbox checked"></div>
                        <div className="feature-text"><b>Trading terminal -</b> Place orders instantly with a click, never
                            miss a good trade.</div>
                    </div>



                </div>

            </div>
            <div className="features-image-section">
                {/* <!-- <img src="img/platform-image-1.svg" className="feature-image" /> --> */}
                <img src="img/pink.png" className="feature-image pink" alt='pink image' />
                <img src="img/green.png" className="feature-image green" alt='green image'/>
                <img src="img/yellow.png" className="feature-image yellow"alt='yellow image' />
                <img src="img/purple.png" className="feature-image purple" alt='purple image'/>
                <img src="img/blue.png" className="feature-image blue" alt='blue image'/>
                <img src="img/orange.png" className="feature-image orange" alt='orange image'/>
            </div>

        </div>
  )
}
