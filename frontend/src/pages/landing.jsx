import React from 'react'
import "../App.css"
import { Link, useNavigate } from 'react-router-dom'

export default function LandingPage() {
    const router = useNavigate();

    return (
        <div className='landingPageContainer'>
            <nav className='landingNav'>
                <div className='navHeader'>
                    <h2>वार्तालाप</h2>
                    <span className='navTagline'>Vartal<span style={{ color: '#d4af37' }}>App</span></span>
                </div>
                <div className='navlist'>
                    <p onClick={() => router("/aljk23")}>Join as Guest</p>
                    <p onClick={() => router("/auth")}>Register</p>
                    <div onClick={() => router("/auth")} role='button' className='navLoginBtn'>
                        <p>Login</p>
                    </div>
                </div>
            </nav>

            <div className="landingMainContainer">
                <div className='landingLeft'>
                    <div className='premiumBadge'>
                        <span>✦ Premium Video Conferencing</span>
                    </div>
                    <h1>
                        <span className='gradientText'>Connect</span>
                        <br />with your<br />
                        <span className='italicText'>loved ones</span>
                    </h1>
                    <p className='landingTagline'>
                        Where every conversation feels like home. <br />
                        
                    </p>
                    <div className='ctaGroup'>
                        <Link to={"/auth"} className='ctaPrimary'>
                            Get Started <span className='arrow'>→</span>
                        </Link>
                        <Link to={"/aljk23"} className='ctaSecondary'>
                            Try as Guest
                        </Link>
                    </div>
                    <div className='trustRow'>
                        <div className='trustItem'>
                            <h3>HD</h3>
                            <p>Crystal Clear Video</p>
                        </div>
                        <div className='trustDivider'></div>
                        <div className='trustItem'>
                            <h3>∞</h3>
                            <p>Unlimited Calls</p>
                        </div>
                        <div className='trustDivider'></div>
                        <div className='trustItem'>
                            <h3>🔒</h3>
                            <p>Secure & Private</p>
                        </div>
                    </div>
                </div>
                <div className='landingRight'>
                    <div className='glowOrb'></div>
                    <img src="/mobile.png" alt="वार्तालाप" />
                </div>
            </div>
        </div>
    )
}