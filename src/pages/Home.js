import './Home.css'

const Home = () => {
    return (
        <>
            <header>
                <div className="header-container">
                    <div className="logo-block">
                        <a href="/">
                            <img className="logo" src="img/logo/logo_hor_x100.png"/>
                            <video className="logo-video-anim" width="240" height="240" playsInline autoPlay="autoplay" loop="loop" preload="auto" muted="">
                                <source src="video/logo-1.mp4" type="video/mp4"/>
                                <source src="video/logo-1.webm" type="video/webm"/>
                            </video>
                        </a>
                    </div>
                    <div className="mobile-nav"></div>
                    <nav>
                        <div className="mobile-close-nav"></div>
                        <ul>
                            <li><a href="#">Log in</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main>
                <section className="ring">
                    <div className="full-page-ring">
                        <img id="ring" src="img/elements/pattern-1.png" alt=""/>
                    </div>
                </section>
                <section className="promo-block">
                    <div className="promo-block-container">
                        <div className="promo-block-title">
                            <div>BLOCKED</div>
                            <div>CHAIN</div>
                            <div>CAPITAL</div>
                        </div>
                        <div className="promo-block-info">
                            Blocked Chain Capital invests in
                            blockchain projects and digital assets,
                            offering our investors tailor-made solutions
                            in the crypto space.
                        </div>
                        <div className="promo-block-footer">
                            <div className="promo-block-contact">
                                <a className="promo-block-btn" href="#">Contact us</a>
                            </div>
                            <div className="promo-block-nav">
                                <ul>
                                    <li><a href="#investment">Invest</a></li>
                                    <li><a href="#portfolio">Portfolio</a></li>
                                    <li><a href="#contact">Contact us</a></li>
                                    <li><a href="#about">About</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="investment" className="info-section">
                    <div className="container">
                        <div className="section-title">Investment types</div>
                        <div className="info-block-grid">
                            <div className="info-block">
                                <div className="info-block-image">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1016.5 1016.5">
                                <defs>
                                    <linearGradient id="a" x1="211.6" x2="320.4" y1="271.4" y2="271.4" gradientUnits="userSpaceOnUse">
                                    <stop offset="0" stopColor="#fbe5a6">
                                        <animate attributeName="stopColor" values="#fbe5a6;#FFD55F;#373336;#FAE4A6;#FAE4A6;#FFD55F;#FAE4A6;#fbe5a6;" dur="6s" repeatCount="indefinite"></animate>
                                    </stop>
                                    <stop offset="1" stopColor="#fae4a6">
                                        <animate attributeName="stopColor" values="#fae4a6;#FAE4A6;#FFD55F;#FAEDA6;#373336;#FFD55F;#FAE4A6;#FFD55F;#fae4a6;" dur="6s" repeatCount="indefinite"></animate>
                                    </stop>
                                    </linearGradient>
                                    <linearGradient id="b" x1="310.4" x2="419.1" y1="271.4" y2="271.4" xlinkHref="#a"/>
                                    <linearGradient id="c" x1="211.6" x2="320.4" y1="370.1" y2="370.1" xlinkHref="#a"/>
                                    <linearGradient id="d" x1="409.1" x2="517.9" y1="271.4" y2="271.4" xlinkHref="#a"/>
                                    <linearGradient id="e" x1="507.9" x2="616.6" y1="271.4" y2="271.4" xlinkHref="#a"/>
                                    <linearGradient id="f" x1="606.6" x2="715.4" y1="271.4" y2="271.4" xlinkHref="#a"/>
                                    <linearGradient id="g" x1="705.4" x2="814.1" y1="271.4" y2="271.4" xlinkHref="#a"/>
                                    <linearGradient id="h" x1="705.4" x2="814.1" y1="370.1" y2="370.1" xlinkHref="#a"/>
                                    <linearGradient id="i" x1="211.6" x2="320.4" y1="468.9" y2="468.9" xlinkHref="#a"/>
                                    <linearGradient id="j" x1="310.4" x2="419.1" y1="468.9" y2="468.9" xlinkHref="#a"/>
                                    <linearGradient id="k" x1="705.4" x2="814.1" y1="468.9" y2="468.9" xlinkHref="#a"/>
                                    <linearGradient id="l" x1="211.6" x2="320.4" y1="567.6" y2="567.6" xlinkHref="#a"/>
                                    <linearGradient id="m" x1="310.4" x2="419.1" y1="567.6" y2="567.6" xlinkHref="#a"/>
                                    <linearGradient id="n" x1="705.4" x2="814.1" y1="567.6" y2="567.6" xlinkHref="#a"/>
                                    <linearGradient id="o" x1="211.6" x2="320.4" y1="666.4" y2="666.4" xlinkHref="#a"/>
                                    <linearGradient id="p" x1="705.4" x2="814.1" y1="666.4" y2="666.4" xlinkHref="#a"/>
                                    <linearGradient id="q" x1="211.6" x2="320.4" y1="765.1" y2="765.1" xlinkHref="#a"/>
                                    <linearGradient id="r" x1="310.4" x2="419.1" y1="765.1" y2="765.1" xlinkHref="#a"/>
                                    <linearGradient id="s" x1="409.1" x2="517.9" y1="765.1" y2="765.1" xlinkHref="#a"/>
                                    <linearGradient id="t" x1="507.9" x2="616.6" y1="765.1" y2="765.1" xlinkHref="#a"/>
                                    <linearGradient id="u" x1="606.6" x2="715.4" y1="765.1" y2="765.1" xlinkHref="#a"/>
                                    <linearGradient id="v" x1="705.4" x2="814.1" y1="765.1" y2="765.1" xlinkHref="#a"/>
                                    <linearGradient id="w" x1="409.1" x2="517.9" y1="370.1" y2="370.1" xlinkHref="#a"/>
                                    <linearGradient id="x" x1="409.1" x2="517.9" y1="567.6" y2="567.6" xlinkHref="#a"/>
                                    <linearGradient id="y" x1="310.4" x2="419.1" y1="666.4" y2="666.4" xlinkHref="#a"/>
                                    <linearGradient id="z" x1="409.1" x2="517.9" y1="666.4" y2="666.4" xlinkHref="#a"/>
                                    <linearGradient id="A" x1="507.9" x2="616.6" y1="666.4" y2="666.4" xlinkHref="#a"/>
                                    <linearGradient id="B" x1="310.4" x2="419.1" y1="370.1" y2="370.1" xlinkHref="#a"/>
                                    <linearGradient id="C" x1="507.9" x2="616.6" y1="370.1" y2="370.1" xlinkHref="#a"/>
                                    <linearGradient id="D" x1="606.6" x2="715.4" y1="370.1" y2="370.1" xlinkHref="#a"/>
                                    <linearGradient id="E" x1="409.1" x2="517.9" y1="468.9" y2="468.9" xlinkHref="#a"/>
                                    <linearGradient id="F" x1="507.9" x2="616.6" y1="468.9" y2="468.9" xlinkHref="#a"/>
                                    <linearGradient id="G" x1="606.6" x2="715.4" y1="468.9" y2="468.9" xlinkHref="#a"/>
                                    <linearGradient id="H" x1="507.9" x2="616.6" y1="567.6" y2="567.6" xlinkHref="#a"/>
                                    <linearGradient id="I" x1="606.6" x2="715.4" y1="567.6" y2="567.6" xlinkHref="#a"/>
                                    <linearGradient id="J" x1="606.6" x2="715.4" y1="666.4" y2="666.4" xlinkHref="#a"/>
                                    <linearGradient id="K" x1="4150.7" x2="4259.4" y1="379.5" y2="379.5" gradientTransform="translate(-4041.3 138.7)" xlinkHref="#a"/>
                                    <linearGradient id="L" x1="4249.4" x2="4358.2" y1="379.5" y2="379.5" gradientTransform="rotate(-45 2351.8 5327.2)" xlinkHref="#a"/>
                                    <linearGradient id="M" x1="4150.7" x2="4259.4" y1="478.3" y2="478.3" gradientTransform="translate(-3971.5 109.8)" xlinkHref="#a"/>
                                    <linearGradient id="N" x1="4348.2" x2="4456.9" y1="379.5" y2="379.5" gradientTransform="translate(-4099.2 -1)" xlinkHref="#a"/>
                                    <linearGradient id="O" x1="4446.9" x2="4555.7" y1="379.5" y2="379.5" gradientTransform="translate(-4128 -70.8)" xlinkHref="#a"/>
                                    <linearGradient id="P" x1="4545.7" x2="4654.4" y1="379.5" y2="379.5" gradientTransform="rotate(-45 2351.8 5327.2)" xlinkHref="#a"/>
                                    <linearGradient id="Q" x1="4644.4" x2="4753.2" y1="379.5" y2="379.5" gradientTransform="translate(-4186 -210.4)" xlinkHref="#a"/>
                                    <linearGradient id="R" x1="4644.4" x2="4753.2" y1="478.3" y2="478.3" gradientTransform="translate(-4116.1 -239.3)" xlinkHref="#a"/>
                                    <linearGradient id="S" x1="4150.7" x2="4259.4" y1="577" y2="577" gradientTransform="translate(-3901.7 80.9)" xlinkHref="#a"/>
                                    <linearGradient id="T" x1="4249.4" x2="4358.2" y1="577" y2="577" gradientTransform="rotate(-45 2351.8 5327.2)" xlinkHref="#a"/>
                                    <linearGradient id="U" x1="4644.4" x2="4753.2" y1="577" y2="577" gradientTransform="translate(-4046.3 -268.2)" xlinkHref="#a"/>
                                    <linearGradient id="V" x1="4150.7" x2="4259.4" y1="675.8" y2="675.8" gradientTransform="translate(-3831.8 52)" xlinkHref="#a"/>
                                    <linearGradient id="W" x1="4249.4" x2="4358.2" y1="675.8" y2="675.8" gradientTransform="translate(-3860.8 -17.9)" xlinkHref="#a"/>
                                    <linearGradient id="X" x1="4644.4" x2="4753.2" y1="675.8" y2="675.8" gradientTransform="translate(-3976.5 -297.2)" xlinkHref="#a"/>
                                    <linearGradient id="Y" x1="4150.7" x2="4259.4" y1="774.5" y2="774.5" gradientTransform="translate(-3762 23)" xlinkHref="#a"/>
                                    <linearGradient id="Z" x1="4644.4" x2="4753.2" y1="774.5" y2="774.5" gradientTransform="translate(-3906.6 -326)" xlinkHref="#a"/>
                                    <linearGradient id="aa" x1="4150.7" x2="4259.4" y1="873.3" y2="873.3" gradientTransform="translate(-3692.2 -5.9)" xlinkHref="#a"/>
                                    <linearGradient id="ab" x1="4249.4" x2="4358.2" y1="873.3" y2="873.3" gradientTransform="rotate(-45 2351.8 5327.2)" xlinkHref="#a"/>
                                    <linearGradient id="ac" x1="4348.2" x2="4456.9" y1="873.3" y2="873.3" gradientTransform="translate(-3750 -145.5)" xlinkHref="#a"/>
                                    <linearGradient id="ad" x1="4446.9" x2="4555.7" y1="873.3" y2="873.3" gradientTransform="translate(-3779 -215.4)" xlinkHref="#a"/>
                                    <linearGradient id="ae" x1="4545.7" x2="4654.4" y1="873.3" y2="873.3" gradientTransform="rotate(-45 2351.8 5327.2)" xlinkHref="#a"/>
                                    <linearGradient id="af" x1="4644.4" x2="4753.2" y1="873.3" y2="873.3" gradientTransform="translate(-3836.8 -355)" xlinkHref="#a"/>
                                    <linearGradient id="ag" x1="4348.2" x2="4456.9" y1="478.3" y2="478.3" gradientTransform="translate(-4029.3 -29.9)" xlinkHref="#a"/>
                                    <linearGradient id="ah" x1="4348.2" x2="4456.9" y1="675.8" y2="675.8" gradientTransform="translate(-3889.7 -87.7)" xlinkHref="#a"/>
                                    <linearGradient id="ai" x1="4249.4" x2="4358.2" y1="774.5" y2="774.5" gradientTransform="translate(-3791 -46.8)" xlinkHref="#a"/>
                                    <linearGradient id="aj" x1="4348.2" x2="4456.9" y1="774.5" y2="774.5" gradientTransform="translate(-3819.9 -116.6)" xlinkHref="#a"/>
                                    <linearGradient id="ak" x1="4446.9" x2="4555.7" y1="774.5" y2="774.5" gradientTransform="translate(-3848.8 -186.4)" xlinkHref="#a"/>
                                    <linearGradient id="al" x1="4249.4" x2="4358.2" y1="478.3" y2="478.3" gradientTransform="translate(-4000.4 40)" xlinkHref="#a"/>
                                    <linearGradient id="am" x1="4446.9" x2="4555.7" y1="478.3" y2="478.3" gradientTransform="translate(-4058.3 -99.7)" xlinkHref="#a"/>
                                    <linearGradient id="an" x1="4545.7" x2="4654.4" y1="478.3" y2="478.3" gradientTransform="translate(-4087.2 -169.5)" xlinkHref="#a"/>
                                    <linearGradient id="ao" x1="4348.2" x2="4456.9" y1="577" y2="577" gradientTransform="translate(-3959.5 -58.8)" xlinkHref="#a"/>
                                    <linearGradient id="ap" x1="4446.9" x2="4555.7" y1="577" y2="577" gradientTransform="translate(-3988.4 -128.6)" xlinkHref="#a"/>
                                    <linearGradient id="aq" x1="4545.7" x2="4654.4" y1="577" y2="577" gradientTransform="rotate(-45 2351.8 5327.2)" xlinkHref="#a"/>
                                    <linearGradient id="ar" x1="4446.9" x2="4555.7" y1="675.8" y2="675.8" gradientTransform="translate(-3918.6 -157.5)" xlinkHref="#a"/>
                                    <linearGradient id="as" x1="4545.7" x2="4654.4" y1="675.8" y2="675.8" gradientTransform="translate(-3947.5 -227.3)" xlinkHref="#a"/>
                                    <linearGradient id="at" x1="4545.7" x2="4654.4" y1="774.5" y2="774.5" gradientTransform="translate(-3877.7 -256.3)" xlinkHref="#a"/>
                                </defs>
                                <g fill="none" strokeDasharray="1 5 0 0 0 0" strokeMiterlimit="10" strokeWidth="10">
                                    <circle cx="266" cy="271.4" r="49.4" stroke="url(#a)"/>
                                    <circle cx="364.7" cy="271.4" r="49.4" stroke="url(#b)"/>
                                    <circle cx="266" cy="370.1" r="49.4" stroke="url(#c)"/>
                                    <circle cx="463.5" cy="271.4" r="49.4" stroke="url(#d)"/>
                                    <circle cx="562.2" cy="271.4" r="49.4" stroke="url(#e)"/>
                                    <circle cx="661" cy="271.4" r="49.4" stroke="url(#f)"/>
                                    <circle cx="759.7" cy="271.4" r="49.4" stroke="url(#g)"/>
                                    <circle cx="759.7" cy="370.1" r="49.4" stroke="url(#h)"/>
                                    <circle cx="266" cy="468.9" r="49.4" stroke="url(#i)"/>
                                    <circle cx="364.7" cy="468.9" r="49.4" stroke="url(#j)"/>
                                    <circle cx="759.7" cy="468.9" r="49.4" stroke="url(#k)"/>
                                    <circle cx="266" cy="567.6" r="49.4" stroke="url(#l)"/>
                                    <circle cx="364.7" cy="567.6" r="49.4" stroke="url(#m)"/>
                                    <circle cx="759.7" cy="567.6" r="49.4" stroke="url(#n)"/>
                                    <circle cx="266" cy="666.4" r="49.4" stroke="url(#o)"/>
                                    <circle cx="759.7" cy="666.4" r="49.4" stroke="url(#p)"/>
                                    <circle cx="266" cy="765.1" r="49.4" stroke="url(#q)"/>
                                    <circle cx="364.7" cy="765.1" r="49.4" stroke="url(#r)"/>
                                    <circle cx="463.5" cy="765.1" r="49.4" stroke="url(#s)"/>
                                    <circle cx="562.2" cy="765.1" r="49.4" stroke="url(#t)"/>
                                    <circle cx="661" cy="765.1" r="49.4" stroke="url(#u)"/>
                                    <circle cx="759.7" cy="765.1" r="49.4" stroke="url(#v)"/>
                                    <circle cx="463.5" cy="370.1" r="49.4" stroke="url(#w)"/>
                                    <circle cx="463.5" cy="567.6" r="49.4" stroke="url(#x)"/>
                                    <circle cx="364.7" cy="666.4" r="49.4" stroke="url(#y)"/>
                                    <circle cx="463.5" cy="666.4" r="49.4" stroke="url(#z)"/>
                                    <circle cx="562.2" cy="666.4" r="49.4" stroke="url(#A)"/>
                                    <circle cx="364.7" cy="370.1" r="49.4" stroke="url(#B)"/>
                                    <circle cx="562.2" cy="370.1" r="49.4" stroke="url(#C)"/>
                                    <circle cx="661" cy="370.1" r="49.4" stroke="url(#D)"/>
                                    <circle cx="463.5" cy="468.9" r="49.4" stroke="url(#E)"/>
                                    <circle cx="562.2" cy="468.9" r="49.4" stroke="url(#F)"/>
                                    <circle cx="661" cy="468.9" r="49.4" stroke="url(#G)"/>
                                    <circle cx="562.2" cy="567.6" r="49.4" stroke="url(#H)"/>
                                    <circle cx="661" cy="567.6" r="49.4" stroke="url(#I)"/>
                                    <circle cx="661" cy="666.4" r="49.4" stroke="url(#J)"/>
                                    <g>
                                    <circle cx="163.7" cy="518.2" r="49.4" stroke="url(#K)" transform="rotate(-45 163.7 518.2)"/>
                                    <circle cx="233.6" cy="448.4" r="49.4" stroke="url(#L)"/>
                                    <circle cx="233.6" cy="588.1" r="49.4" stroke="url(#M)" transform="rotate(-45 233.6 588)"/>
                                    <circle cx="303.4" cy="378.6" r="49.4" stroke="url(#N)" transform="rotate(-45 303.4 378.6)"/>
                                    <circle cx="373.2" cy="308.8" r="49.4" stroke="url(#O)" transform="rotate(-45 373.2 308.8)"/>
                                    <circle cx="443" cy="238.9" r="49.4" stroke="url(#P)"/>
                                    <circle cx="512.9" cy="169.1" r="49.4" stroke="url(#Q)" transform="rotate(-45 512.9 169.1)"/>
                                    <circle cx="582.7" cy="238.9" r="49.4" stroke="url(#R)" transform="rotate(-45 582.7 239)"/>
                                    <circle cx="303.4" cy="657.9" r="49.4" stroke="url(#S)" transform="rotate(-45 303.4 657.9)"/>
                                    <circle cx="373.2" cy="588.1" r="49.4" stroke="url(#T)"/>
                                    <circle cx="652.5" cy="308.8" r="49.4" stroke="url(#U)" transform="rotate(-45 652.5 308.8)"/>
                                    <circle cx="373.2" cy="727.7" r="49.4" stroke="url(#V)" transform="rotate(-45 373.2 727.7)"/>
                                    <circle cx="443" cy="657.9" r="49.4" stroke="url(#W)" transform="rotate(-45 443 657.9)"/>
                                    <circle cx="722.3" cy="378.6" r="49.4" stroke="url(#X)" transform="rotate(-45 722.3 378.6)"/>
                                    <circle cx="443" cy="797.5" r="49.4" stroke="url(#Y)" transform="rotate(-45 443 797.5)"/>
                                    <circle cx="792.2" cy="448.4" r="49.4" stroke="url(#Z)" transform="rotate(-45 792.2 448.4)"/>
                                    <circle cx="512.9" cy="867.4" r="49.4" stroke="url(#aa)" transform="rotate(-45 512.9 867.4)"/>
                                    <circle cx="582.7" cy="797.5" r="49.4" stroke="url(#ab)"/>
                                    <circle cx="652.5" cy="727.7" r="49.4" stroke="url(#ac)" transform="rotate(-45 652.5 727.7)"/>
                                    <circle cx="722.3" cy="657.9" r="49.4" stroke="url(#ad)" transform="rotate(-45 722.3 657.9)"/>
                                    <circle cx="792.2" cy="588.1" r="49.4" stroke="url(#ae)"/>
                                    <circle cx="862" cy="518.2" r="49.4" stroke="url(#af)" transform="rotate(-45 862 518.2)"/>
                                    <circle cx="373.2" cy="448.4" r="49.4" stroke="url(#ag)" transform="rotate(-45 373.2 448.4)"/>
                                    <circle cx="512.9" cy="588.1" r="49.4" stroke="url(#ah)" transform="rotate(-45 512.9 588)"/>
                                    <circle cx="512.9" cy="727.7" r="49.4" stroke="url(#ai)" transform="rotate(-45 512.9 727.7)"/>
                                    <circle cx="582.7" cy="657.9" r="49.4" stroke="url(#aj)" transform="rotate(-45 582.7 657.9)"/>
                                    <circle cx="652.5" cy="588.1" r="49.4" stroke="url(#ak)" transform="rotate(-45 652.5 588)"/>
                                    <circle cx="303.4" cy="518.2" r="49.4" stroke="url(#al)" transform="rotate(-45 303.4 518.2)"/>
                                    <circle cx="443" cy="378.6" r="49.4" stroke="url(#am)" transform="rotate(-45 443 378.6)"/>
                                    <circle cx="512.9" cy="308.8" r="49.4" stroke="url(#an)" transform="rotate(-45 512.9 308.8)"/>
                                    <circle cx="443" cy="518.3" r="49.4" stroke="url(#ao)" transform="rotate(-45 443 518.3)"/>
                                    <circle cx="512.9" cy="448.4" r="49.4" stroke="url(#ap)" transform="rotate(-45 512.9 448.4)"/>
                                    <circle cx="582.7" cy="378.6" r="49.4" stroke="url(#aq)"/>
                                    <circle cx="582.7" cy="518.2" r="49.4" stroke="url(#ar)" transform="rotate(-45 582.7 518.2)"/>
                                    <circle cx="652.5" cy="448.4" r="49.4" stroke="url(#as)" transform="rotate(-45 652.5 448.4)"/>
                                    <circle cx="722.3" cy="518.2" r="49.4" stroke="url(#at)" transform="rotate(-45 722.3 518.2)"/>
                                    </g>
                                </g>
                                </svg>

                                </div>
                                <div className="info-block-title">
                                    Early-Stage fund
                                </div>
                                <div className="info-block-description">
                                    Our team of analysts is able to find, sort
                                    and select projects in their early stages of
                                    development. We invest in DeFi, NFT
                                    markets, layer one blockchains and
                                    projects with high growth potential that
                                    meet our requirements.
                                </div>
                            </div>
                            <div className="info-block">
                                <div className="info-block-image">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1016.5 1016.5">
                                        <defs>
                                            <linearGradient id="a" x1="211.6" x2="320.4" y1="271.4" y2="271.4" gradientUnits="userSpaceOnUse">
                                                <stop offset="0" stopColor="#fbe5a6">
                                                    <animate attributeName="stopColor" values="#fbe5a6;#FFD55F;#373336;#FAE4A6;#FAE4A6;#FFD55F;#FAE4A6;#fbe5a6;" dur="6s" repeatCount="indefinite"></animate>
                                                </stop>
                                                <stop offset="1" stopColor="#fae4a6">
                                                    <animate attributeName="stopColor" values="#fae4a6;#FAE4A6;#FFD55F;#FAEDA6;#373336;#FFD55F;#FAE4A6;#FFD55F;#fae4a6;" dur="6s" repeatCount="indefinite"></animate>
                                                </stop>
                                            </linearGradient>
                                            <linearGradient id="b" x1="310.4" x2="419.1" y1="271.4" y2="271.4" xlinkHref="#a"/>
                                            <linearGradient id="c" x1="211.6" x2="320.4" y1="370.1" y2="370.1" xlinkHref="#a"/>
                                            <linearGradient id="d" x1="409.1" x2="517.9" y1="271.4" y2="271.4" xlinkHref="#a"/>
                                            <linearGradient id="e" x1="507.9" x2="616.6" y1="271.4" y2="271.4" xlinkHref="#a"/>
                                            <linearGradient id="f" x1="606.6" x2="715.4" y1="271.4" y2="271.4" xlinkHref="#a"/>
                                            <linearGradient id="g" x1="705.4" x2="814.1" y1="271.4" y2="271.4" xlinkHref="#a"/>
                                            <linearGradient id="h" x1="705.4" x2="814.1" y1="370.1" y2="370.1" xlinkHref="#a"/>
                                            <linearGradient id="i" x1="211.6" x2="320.4" y1="468.9" y2="468.9" xlinkHref="#a"/>
                                            <linearGradient id="j" x1="310.4" x2="419.1" y1="468.9" y2="468.9" xlinkHref="#a"/>
                                            <linearGradient id="k" x1="705.4" x2="814.1" y1="468.9" y2="468.9" xlinkHref="#a"/>
                                            <linearGradient id="l" x1="211.6" x2="320.4" y1="567.6" y2="567.6" xlinkHref="#a"/>
                                            <linearGradient id="m" x1="310.4" x2="419.1" y1="567.6" y2="567.6" xlinkHref="#a"/>
                                            <linearGradient id="n" x1="705.4" x2="814.1" y1="567.6" y2="567.6" xlinkHref="#a"/>
                                            <linearGradient id="o" x1="211.6" x2="320.4" y1="666.4" y2="666.4" xlinkHref="#a"/>
                                            <linearGradient id="p" x1="705.4" x2="814.1" y1="666.4" y2="666.4" xlinkHref="#a"/>
                                            <linearGradient id="q" x1="211.6" x2="320.4" y1="765.1" y2="765.1" xlinkHref="#a"/>
                                            <linearGradient id="r" x1="310.4" x2="419.1" y1="765.1" y2="765.1" xlinkHref="#a"/>
                                            <linearGradient id="s" x1="409.1" x2="517.9" y1="765.1" y2="765.1" xlinkHref="#a"/>
                                            <linearGradient id="t" x1="507.9" x2="616.6" y1="765.1" y2="765.1" xlinkHref="#a"/>
                                            <linearGradient id="u" x1="606.6" x2="715.4" y1="765.1" y2="765.1" xlinkHref="#a"/>
                                            <linearGradient id="v" x1="705.4" x2="814.1" y1="765.1" y2="765.1" xlinkHref="#a"/>
                                            <linearGradient id="w" x1="409.1" x2="517.9" y1="370.1" y2="370.1" xlinkHref="#a"/>
                                            <linearGradient id="x" x1="409.1" x2="517.9" y1="567.6" y2="567.6" xlinkHref="#a"/>
                                            <linearGradient id="y" x1="310.4" x2="419.1" y1="666.4" y2="666.4" xlinkHref="#a"/>
                                            <linearGradient id="z" x1="409.1" x2="517.9" y1="666.4" y2="666.4" xlinkHref="#a"/>
                                            <linearGradient id="A" x1="507.9" x2="616.6" y1="666.4" y2="666.4" xlinkHref="#a"/>
                                            <linearGradient id="B" x1="310.4" x2="419.1" y1="370.1" y2="370.1" xlinkHref="#a"/>
                                            <linearGradient id="C" x1="507.9" x2="616.6" y1="370.1" y2="370.1" xlinkHref="#a"/>
                                            <linearGradient id="D" x1="606.6" x2="715.4" y1="370.1" y2="370.1" xlinkHref="#a"/>
                                            <linearGradient id="E" x1="409.1" x2="517.9" y1="468.9" y2="468.9" xlinkHref="#a"/>
                                            <linearGradient id="F" x1="507.9" x2="616.6" y1="468.9" y2="468.9" xlinkHref="#a"/>
                                            <linearGradient id="G" x1="606.6" x2="715.4" y1="468.9" y2="468.9" xlinkHref="#a"/>
                                            <linearGradient id="H" x1="507.9" x2="616.6" y1="567.6" y2="567.6" xlinkHref="#a"/>
                                            <linearGradient id="I" x1="606.6" x2="715.4" y1="567.6" y2="567.6" xlinkHref="#a"/>
                                            <linearGradient id="J" x1="606.6" x2="715.4" y1="666.4" y2="666.4" xlinkHref="#a"/>
                                            <linearGradient id="K" x1="4150.7" x2="4259.4" y1="379.5" y2="379.5" gradientTransform="translate(-4041.3 138.7)" xlinkHref="#a"/>
                                            <linearGradient id="L" x1="4249.4" x2="4358.2" y1="379.5" y2="379.5" gradientTransform="rotate(-45 2351.8 5327.2)" xlinkHref="#a"/>
                                            <linearGradient id="M" x1="4150.7" x2="4259.4" y1="478.3" y2="478.3" gradientTransform="translate(-3971.5 109.8)" xlinkHref="#a"/>
                                            <linearGradient id="N" x1="4348.2" x2="4456.9" y1="379.5" y2="379.5" gradientTransform="translate(-4099.2 -1)" xlinkHref="#a"/>
                                            <linearGradient id="O" x1="4446.9" x2="4555.7" y1="379.5" y2="379.5" gradientTransform="translate(-4128 -70.8)" xlinkHref="#a"/>
                                            <linearGradient id="P" x1="4545.7" x2="4654.4" y1="379.5" y2="379.5" gradientTransform="rotate(-45 2351.8 5327.2)" xlinkHref="#a"/>
                                            <linearGradient id="Q" x1="4644.4" x2="4753.2" y1="379.5" y2="379.5" gradientTransform="translate(-4186 -210.4)" xlinkHref="#a"/>
                                            <linearGradient id="R" x1="4644.4" x2="4753.2" y1="478.3" y2="478.3" gradientTransform="translate(-4116.1 -239.3)" xlinkHref="#a"/>
                                            <linearGradient id="S" x1="4150.7" x2="4259.4" y1="577" y2="577" gradientTransform="translate(-3901.7 80.9)" xlinkHref="#a"/>
                                            <linearGradient id="T" x1="4249.4" x2="4358.2" y1="577" y2="577" gradientTransform="rotate(-45 2351.8 5327.2)" xlinkHref="#a"/>
                                            <linearGradient id="U" x1="4644.4" x2="4753.2" y1="577" y2="577" gradientTransform="translate(-4046.3 -268.2)" xlinkHref="#a"/>
                                            <linearGradient id="V" x1="4150.7" x2="4259.4" y1="675.8" y2="675.8" gradientTransform="translate(-3831.8 52)" xlinkHref="#a"/>
                                            <linearGradient id="W" x1="4249.4" x2="4358.2" y1="675.8" y2="675.8" gradientTransform="translate(-3860.8 -17.9)" xlinkHref="#a"/>
                                            <linearGradient id="X" x1="4644.4" x2="4753.2" y1="675.8" y2="675.8" gradientTransform="translate(-3976.5 -297.2)" xlinkHref="#a"/>
                                            <linearGradient id="Y" x1="4150.7" x2="4259.4" y1="774.5" y2="774.5" gradientTransform="translate(-3762 23)" xlinkHref="#a"/>
                                            <linearGradient id="Z" x1="4644.4" x2="4753.2" y1="774.5" y2="774.5" gradientTransform="translate(-3906.6 -326)" xlinkHref="#a"/>
                                            <linearGradient id="aa" x1="4150.7" x2="4259.4" y1="873.3" y2="873.3" gradientTransform="translate(-3692.2 -5.9)" xlinkHref="#a"/>
                                            <linearGradient id="ab" x1="4249.4" x2="4358.2" y1="873.3" y2="873.3" gradientTransform="rotate(-45 2351.8 5327.2)" xlinkHref="#a"/>
                                            <linearGradient id="ac" x1="4348.2" x2="4456.9" y1="873.3" y2="873.3" gradientTransform="translate(-3750 -145.5)" xlinkHref="#a"/>
                                            <linearGradient id="ad" x1="4446.9" x2="4555.7" y1="873.3" y2="873.3" gradientTransform="translate(-3779 -215.4)" xlinkHref="#a"/>
                                            <linearGradient id="ae" x1="4545.7" x2="4654.4" y1="873.3" y2="873.3" gradientTransform="rotate(-45 2351.8 5327.2)" xlinkHref="#a"/>
                                            <linearGradient id="af" x1="4644.4" x2="4753.2" y1="873.3" y2="873.3" gradientTransform="translate(-3836.8 -355)" xlinkHref="#a"/>
                                            <linearGradient id="ag" x1="4348.2" x2="4456.9" y1="478.3" y2="478.3" gradientTransform="translate(-4029.3 -29.9)" xlinkHref="#a"/>
                                            <linearGradient id="ah" x1="4348.2" x2="4456.9" y1="675.8" y2="675.8" gradientTransform="translate(-3889.7 -87.7)" xlinkHref="#a"/>
                                            <linearGradient id="ai" x1="4249.4" x2="4358.2" y1="774.5" y2="774.5" gradientTransform="translate(-3791 -46.8)" xlinkHref="#a"/>
                                            <linearGradient id="aj" x1="4348.2" x2="4456.9" y1="774.5" y2="774.5" gradientTransform="translate(-3819.9 -116.6)" xlinkHref="#a"/>
                                            <linearGradient id="ak" x1="4446.9" x2="4555.7" y1="774.5" y2="774.5" gradientTransform="translate(-3848.8 -186.4)" xlinkHref="#a"/>
                                            <linearGradient id="al" x1="4249.4" x2="4358.2" y1="478.3" y2="478.3" gradientTransform="translate(-4000.4 40)" xlinkHref="#a"/>
                                            <linearGradient id="am" x1="4446.9" x2="4555.7" y1="478.3" y2="478.3" gradientTransform="translate(-4058.3 -99.7)" xlinkHref="#a"/>
                                            <linearGradient id="an" x1="4545.7" x2="4654.4" y1="478.3" y2="478.3" gradientTransform="translate(-4087.2 -169.5)" xlinkHref="#a"/>
                                            <linearGradient id="ao" x1="4348.2" x2="4456.9" y1="577" y2="577" gradientTransform="translate(-3959.5 -58.8)" xlinkHref="#a"/>
                                            <linearGradient id="ap" x1="4446.9" x2="4555.7" y1="577" y2="577" gradientTransform="translate(-3988.4 -128.6)" xlinkHref="#a"/>
                                            <linearGradient id="aq" x1="4545.7" x2="4654.4" y1="577" y2="577" gradientTransform="rotate(-45 2351.8 5327.2)" xlinkHref="#a"/>
                                            <linearGradient id="ar" x1="4446.9" x2="4555.7" y1="675.8" y2="675.8" gradientTransform="translate(-3918.6 -157.5)" xlinkHref="#a"/>
                                            <linearGradient id="as" x1="4545.7" x2="4654.4" y1="675.8" y2="675.8" gradientTransform="translate(-3947.5 -227.3)" xlinkHref="#a"/>
                                            <linearGradient id="at" x1="4545.7" x2="4654.4" y1="774.5" y2="774.5" gradientTransform="translate(-3877.7 -256.3)" xlinkHref="#a"/>
                                        </defs>
                                        <g fill="none" strokeDasharray="1 5 0 0 0 0" strokeMiterlimit="10" strokeWidth="10">
                                            <circle cx="266" cy="271.4" r="49.4" stroke="url(#a)"/>
                                            <circle cx="364.7" cy="271.4" r="49.4" stroke="url(#b)"/>
                                            <circle cx="266" cy="370.1" r="49.4" stroke="url(#c)"/>
                                            <circle cx="463.5" cy="271.4" r="49.4" stroke="url(#d)"/>
                                            <circle cx="562.2" cy="271.4" r="49.4" stroke="url(#e)"/>
                                            <circle cx="661" cy="271.4" r="49.4" stroke="url(#f)"/>
                                            <circle cx="759.7" cy="271.4" r="49.4" stroke="url(#g)"/>
                                            <circle cx="759.7" cy="370.1" r="49.4" stroke="url(#h)"/>
                                            <circle cx="266" cy="468.9" r="49.4" stroke="url(#i)"/>
                                            <circle cx="364.7" cy="468.9" r="49.4" stroke="url(#j)"/>
                                            <circle cx="759.7" cy="468.9" r="49.4" stroke="url(#k)"/>
                                            <circle cx="266" cy="567.6" r="49.4" stroke="url(#l)"/>
                                            <circle cx="364.7" cy="567.6" r="49.4" stroke="url(#m)"/>
                                            <circle cx="759.7" cy="567.6" r="49.4" stroke="url(#n)"/>
                                            <circle cx="266" cy="666.4" r="49.4" stroke="url(#o)"/>
                                            <circle cx="759.7" cy="666.4" r="49.4" stroke="url(#p)"/>
                                            <circle cx="266" cy="765.1" r="49.4" stroke="url(#q)"/>
                                            <circle cx="364.7" cy="765.1" r="49.4" stroke="url(#r)"/>
                                            <circle cx="463.5" cy="765.1" r="49.4" stroke="url(#s)"/>
                                            <circle cx="562.2" cy="765.1" r="49.4" stroke="url(#t)"/>
                                            <circle cx="661" cy="765.1" r="49.4" stroke="url(#u)"/>
                                            <circle cx="759.7" cy="765.1" r="49.4" stroke="url(#v)"/>
                                            <circle cx="463.5" cy="370.1" r="49.4" stroke="url(#w)"/>
                                            <circle cx="463.5" cy="567.6" r="49.4" stroke="url(#x)"/>
                                            <circle cx="364.7" cy="666.4" r="49.4" stroke="url(#y)"/>
                                            <circle cx="463.5" cy="666.4" r="49.4" stroke="url(#z)"/>
                                            <circle cx="562.2" cy="666.4" r="49.4" stroke="url(#A)"/>
                                            <circle cx="364.7" cy="370.1" r="49.4" stroke="url(#B)"/>
                                            <circle cx="562.2" cy="370.1" r="49.4" stroke="url(#C)"/>
                                            <circle cx="661" cy="370.1" r="49.4" stroke="url(#D)"/>
                                            <circle cx="463.5" cy="468.9" r="49.4" stroke="url(#E)"/>
                                            <circle cx="562.2" cy="468.9" r="49.4" stroke="url(#F)"/>
                                            <circle cx="661" cy="468.9" r="49.4" stroke="url(#G)"/>
                                            <circle cx="562.2" cy="567.6" r="49.4" stroke="url(#H)"/>
                                            <circle cx="661" cy="567.6" r="49.4" stroke="url(#I)"/>
                                            <circle cx="661" cy="666.4" r="49.4" stroke="url(#J)"/>
                                            <g>
                                                <circle cx="163.7" cy="518.2" r="49.4" stroke="url(#K)" transform="rotate(-45 163.7 518.2)"/>
                                                <circle cx="233.6" cy="448.4" r="49.4" stroke="url(#L)"/>
                                                <circle cx="233.6" cy="588.1" r="49.4" stroke="url(#M)" transform="rotate(-45 233.6 588)"/>
                                                <circle cx="303.4" cy="378.6" r="49.4" stroke="url(#N)" transform="rotate(-45 303.4 378.6)"/>
                                                <circle cx="373.2" cy="308.8" r="49.4" stroke="url(#O)" transform="rotate(-45 373.2 308.8)"/>
                                                <circle cx="443" cy="238.9" r="49.4" stroke="url(#P)"/>
                                                <circle cx="512.9" cy="169.1" r="49.4" stroke="url(#Q)" transform="rotate(-45 512.9 169.1)"/>
                                                <circle cx="582.7" cy="238.9" r="49.4" stroke="url(#R)" transform="rotate(-45 582.7 239)"/>
                                                <circle cx="303.4" cy="657.9" r="49.4" stroke="url(#S)" transform="rotate(-45 303.4 657.9)"/>
                                                <circle cx="373.2" cy="588.1" r="49.4" stroke="url(#T)"/>
                                                <circle cx="652.5" cy="308.8" r="49.4" stroke="url(#U)" transform="rotate(-45 652.5 308.8)"/>
                                                <circle cx="373.2" cy="727.7" r="49.4" stroke="url(#V)" transform="rotate(-45 373.2 727.7)"/>
                                                <circle cx="443" cy="657.9" r="49.4" stroke="url(#W)" transform="rotate(-45 443 657.9)"/>
                                                <circle cx="722.3" cy="378.6" r="49.4" stroke="url(#X)" transform="rotate(-45 722.3 378.6)"/>
                                                <circle cx="443" cy="797.5" r="49.4" stroke="url(#Y)" transform="rotate(-45 443 797.5)"/>
                                                <circle cx="792.2" cy="448.4" r="49.4" stroke="url(#Z)" transform="rotate(-45 792.2 448.4)"/>
                                                <circle cx="512.9" cy="867.4" r="49.4" stroke="url(#aa)" transform="rotate(-45 512.9 867.4)"/>
                                                <circle cx="582.7" cy="797.5" r="49.4" stroke="url(#ab)"/>
                                                <circle cx="652.5" cy="727.7" r="49.4" stroke="url(#ac)" transform="rotate(-45 652.5 727.7)"/>
                                                <circle cx="722.3" cy="657.9" r="49.4" stroke="url(#ad)" transform="rotate(-45 722.3 657.9)"/>
                                                <circle cx="792.2" cy="588.1" r="49.4" stroke="url(#ae)"/>
                                                <circle cx="862" cy="518.2" r="49.4" stroke="url(#af)" transform="rotate(-45 862 518.2)"/>
                                                <circle cx="373.2" cy="448.4" r="49.4" stroke="url(#ag)" transform="rotate(-45 373.2 448.4)"/>
                                                <circle cx="512.9" cy="588.1" r="49.4" stroke="url(#ah)" transform="rotate(-45 512.9 588)"/>
                                                <circle cx="512.9" cy="727.7" r="49.4" stroke="url(#ai)" transform="rotate(-45 512.9 727.7)"/>
                                                <circle cx="582.7" cy="657.9" r="49.4" stroke="url(#aj)" transform="rotate(-45 582.7 657.9)"/>
                                                <circle cx="652.5" cy="588.1" r="49.4" stroke="url(#ak)" transform="rotate(-45 652.5 588)"/>
                                                <circle cx="303.4" cy="518.2" r="49.4" stroke="url(#al)" transform="rotate(-45 303.4 518.2)"/>
                                                <circle cx="443" cy="378.6" r="49.4" stroke="url(#am)" transform="rotate(-45 443 378.6)"/>
                                                <circle cx="512.9" cy="308.8" r="49.4" stroke="url(#an)" transform="rotate(-45 512.9 308.8)"/>
                                                <circle cx="443" cy="518.3" r="49.4" stroke="url(#ao)" transform="rotate(-45 443 518.3)"/>
                                                <circle cx="512.9" cy="448.4" r="49.4" stroke="url(#ap)" transform="rotate(-45 512.9 448.4)"/>
                                                <circle cx="582.7" cy="378.6" r="49.4" stroke="url(#aq)"/>
                                                <circle cx="582.7" cy="518.2" r="49.4" stroke="url(#ar)" transform="rotate(-45 582.7 518.2)"/>
                                                <circle cx="652.5" cy="448.4" r="49.4" stroke="url(#as)" transform="rotate(-45 652.5 448.4)"/>
                                                <circle cx="722.3" cy="518.2" r="49.4" stroke="url(#at)" transform="rotate(-45 722.3 518.2)"/>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <div className="info-block-title">
                                    Digital asset fund
                                </div>
                                <div className="info-block-description">
                                    Providing portfolio management and
                                    monthly liquidity to our investors,
                                    we invest, trade and grow the initial
                                    investment, creating a perfect way to earn
                                    passive income and expand your portfolio
                                    in any market conditions.
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <a href="#"><button className="btn btn-outline">Invest</button></a>
                        </div>
                    </div>
                </section>
                <section id="about" className="info-square-section">
                    <div className="info-square-container">
                        <div className="info-square-block">
                            <div className="sparkle-circle">
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="1016.47059" height="1016.47059" viewBox="0 0 1016.47059 1016.47059">
    <title>variants</title>
    <g>
        <g>
        <g>
            <circle cx="495.18107" cy="506.40426" r="350.56597" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#a)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="506.40426" r="350.56597" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#a)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="506.40426" r="350.56597" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#a)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="506.40426" r="350.56597" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#a)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="506.40426" r="350.56597" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#a)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="506.40426" r="350.56597" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#a)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="506.40426" r="350.56597" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#a)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="506.40426" r="350.56597" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#a)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="509.96565" r="347.00946" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#i)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="512.52603" r="344.45995" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#j)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="518.97625" r="338.02084" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#k)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="519.52395" r="337.48602" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#l)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="527.41703" r="329.60921" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#m)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="533.64192" r="323.40527" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#n)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="537.5071" r="319.54901" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#o)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="544.24451" r="312.82984" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#p)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="552.00289" r="305.09056" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#q)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="555.64964" r="301.45267" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#r)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="563.02115" r="294.10428" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#s)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="569.44063" r="287.70696" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#t)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="572.54521" r="284.61336" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#u)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="578.95826" r="278.21598" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#v)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="581.66958" r="275.51285" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#w)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="587.93783" r="269.25582" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#x)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="594.60936" r="262.59455" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#y)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="597.69273" r="259.51518" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#z)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="603.12696" r="254.09303" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#aa)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="611.36384" r="245.86091" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#ab)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="614.05742" r="243.16872" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#ac)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="622.40354" r="234.82024" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#ad)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="630.06802" r="227.15106" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#ae)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="634.37672" r="222.83789" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#af)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="642.46622" r="214.73641" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#ag)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="650.97815" r="206.20683" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#ah)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="655.73146" r="201.44166" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#ai)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="665.30904" r="191.83564" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#aj)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="673.95667" r="183.15841" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#ak)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="686.48828" r="170.60014" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#al)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="691.34457" r="165.72579" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#am)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="699.54435" r="157.49489" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#an)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="707.34002" r="149.67106" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#ao)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="710.70193" r="146.29815" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#ap)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="717.18574" r="139.79481" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#aq)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="722.96711" r="133.99905" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#ar)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="726.31141" r="130.64802" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#as)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="731.46958" r="125.48165" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#at)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="737.052" r="119.89362" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#au)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="741.48533" r="115.45816" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#av)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="741.48533" r="115.45816" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#av)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="748.08942" r="108.8539" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#ax)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="752.42251" r="104.52167" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#ay)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="754.91941" r="102.02514" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#az)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="759.7295" r="97.21466" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#ba)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="763.93038" r="93.01305" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#bb)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="767.14847" r="89.79505" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#bc)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="767.14847" r="89.79505" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#bc)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="774.78867" r="82.16025" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#be)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="774.55194" r="82.40327" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#bf)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="774.55194" r="82.40327" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#bf)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="779.49075" r="77.4746" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#bh)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="782.78754" r="74.19319" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#bi)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="782.78754" r="74.19319" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#bi)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="787.47603" r="69.51671" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#bk)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="789.18096" r="67.82152" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#bl)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="789.18096" r="67.82152" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#bl)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="789.18096" r="67.82152" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#bl)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="794.7941" r="62.21745" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#bo)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="794.7941" r="62.21745" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#bo)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="795.26626" r="61.75172" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#bq)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="795.26626" r="61.75172" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#bq)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="799.02075" r="57.99408" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#bs)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="799.02075" r="57.99408" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#bs)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="798.67064" r="58.34228" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#bu)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="798.67064" r="58.34228" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#bu)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="798.67064" r="58.34228" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#bu)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="798.67064" r="58.34228" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#bu)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="798.84108" r="58.16078" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#by)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="798.84108" r="58.16078" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#by)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="798.84108" r="58.16078" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#by)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="798.84108" r="58.16078" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#by)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="798.84108" r="58.16078" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#by)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="798.84108" r="58.16078" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#by)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="803.97961" r="53.00251" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#ce)"/>
        </g>
        <g>
            <circle cx="495.18107" cy="803.97961" r="53.00251" fill="none" strokeMiterlimit="10" strokeWidth="10" strokeDasharray="1 10 0 0 0 0" stroke="url(#ce)"/>
        </g>
        </g>
    </g>
    </svg>

                            </div>
                            <div className="section-title">Blocked Chain Funds</div>
                            <div className="info-square-description">
                                <p>
                                    Blocked Chain Capital was co-founded
                                    by long-term seasoned investors and cryptocurrency/blockchain
                                    analysts. While providing two separate solutions to our investors,
                                    we also create custom tailor-made offers to individuals, based on
                                    their short and long term goals, as well as risk-managemen
                                    factors.
                                </p>
                                <p>
                                    While our venture capital fund has the possibilities to invest in the
                                    early rounds of new blockchain projects and secure long term high
                                    rewards, our asset management fund takes care of the short term
                                    profits and provides liquidity on-demand.
                                </p>
                            </div>
                            <a className="promo-block-btn" href="#">Join the fund</a>
                        </div>
                    </div>
                </section>
                <section className="form-section">
                    <div className="container">
                        <div className="section-title">Investor forms</div>
                        <form>
                            <div className="form-column">
                                <div className="form-group">
                                    <label for="input_1">Type to invesment<span>*</span></label>
                                    <select className="form-control" name="input_1" id="input_1">
                                        <option value="earlyStageFund">Early-Stage fund</option>
                                        <option value="digitalAssetFund">Digital asset fund</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label for="input_2">City</label>
                                    <input className="form-control" type="text" name="input_2" id="input_2"/>
                                </div>
                            </div>
                            <div className="form-column">
                                <div className="form-group">
                                    <label for="input_3">First name<span>*</span></label>
                                    <input className="form-control" type="text" name="input_3" id="input_3"/>
                                </div>
                                <div className="form-group">
                                    <label for="input_4">Last name<span>*</span></label>
                                    <input className="form-control" type="text" name="input_4" id="input_4"/>
                                </div>
                            </div>
                            <div className="form-column">
                                <div className="form-group">
                                    <label for="input_5">Email<span>*</span></label>
                                    <input className="form-control" type="email" name="input_5" id="input_5"/>
                                </div>
                                <div className="form-group">
                                    <label for="input_6">Company</label>
                                    <input className="form-control" type="text" name="input_6" id="input_6"/>
                                </div>
                            </div>
                            <div className="form-column">
                                <div className="form-group">
                                    <label for="input_7">Job title</label>
                                    <input className="form-control" type="text" name="input_7" id="input_7"/>
                                </div>
                            </div>
                            <div className="form-btn-block">
                                <button type="submit" className="btn btn-dark">Submit</button>
                            </div>
                        </form>
                    </div>
                </section>
                <section id="portfolio" className="projects-section">
                    <div className="container">
                        <div className="projects-block-row">
                            <div className="projects-block-section">
                                <div className="section-title">Blocked Chain Portfolio</div>
                                <div className="projects-description">
                                    <p>
                                        Our portfolio includes a vast and diversified list of
                                        blockchains, DeFi and NFT projects that we have
                                        invested in during different stages of their existence,
                                        from early-rounds to after listing.
                                    </p>
                                </div>
                            </div>
                            <div className="projects-block-section">
                                <table className="portfolio-table">
                                    <tr>
                                        <td>
                                            <img className="project-logo" src="./img/portfolio/1inch.svg"/>
                                            <span className="project-name">1inch</span>
                                        </td>
                                        <td><a target="_blank" href="https://1inch.io/">website</a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img className="project-logo" src="./img/portfolio/aave.svg"/>
                                            <span className="project-name">Aave</span>
                                        </td>
                                        <td><a target="_blank" href="https://aave.com/">website</a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img className="project-logo" src="./img/portfolio/alice.png"/>
                                            <span className="project-name">Alice</span>
                                        </td>
                                        <td><a target="_blank" href="https://www.myneighboralice.com/">website</a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img className="project-logo" src="./img/portfolio/cardano.svg"/>
                                            <span className="project-name">Cardano</span>
                                        </td>
                                        <td><a target="_blank" href="https://cardano.org/">website</a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img className="project-logo" src="./img/portfolio/casper.svg"/>
                                            <span className="project-name">Casper</span>
                                        </td>
                                        <td><a target="_blank" href="https://casper.network/en/network">website</a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img className="project-logo" src="./img/portfolio/centrifuge.svg"/>
                                            <span className="project-name">Centrifuge</span>
                                        </td>
                                        <td><a target="_blank" href="https://centrifuge.io/">website</a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img className="project-logo" src="./img/portfolio/clover.jpg"/>
                                            <span className="project-name">Clover</span>
                                        </td>
                                        <td><a target="_blank" href="https://clover.finance/">website</a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img className="project-logo" src="./img/portfolio/cosmos.svg"/>
                                            <span className="project-name">Cosmos</span>
                                        </td>
                                        <td><a target="_blank" href="https://cosmos.network/">website</a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img className="project-logo" src="./img/portfolio/covalent.svg"/>
                                            <span className="project-name">Covalent</span>
                                        </td>
                                        <td><a target="_blank" href="https://www.covalenthq.com/">website</a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img className="project-logo" src="./img/portfolio/efinity.svg"/>
                                            <span className="project-name">Efinity</span>
                                        </td>
                                        <td><a target="_blank" href="https://efinity.io/">website</a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img className="project-logo" src="./img/portfolio/enjin.svg"/>
                                            <span className="project-name">Enjin</span>
                                        </td>
                                        <td><a target="_blank" href="https://enjin.io/">website</a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img className="project-logo" src="./img/portfolio/ethereum.svg"/>
                                            <span className="project-name">Ethereum</span>
                                        </td>
                                        <td><a target="_blank" href="https://ethereum.org/en/">website</a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img className="project-logo" src="./img/portfolio/flow.svg"/>
                                            <span className="project-name">Flow</span>
                                        </td>
                                        <td><a target="_blank" href="https://www.onflow.org/">website</a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img className="project-logo" src="./img/portfolio/karura.svg"/>
                                            <span className="project-name">Karura</span>
                                        </td>
                                        <td><a target="_blank" href="https://acala.network/karura">website</a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img className="project-logo" src="./img/portfolio/litecoin.svg"/>
                                            <span className="project-name">Litecoin</span>
                                        </td>
                                        <td><a target="_blank" href="https://litecoin.org/">website</a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img className="project-logo" src="./img/portfolio/mina.svg"/>
                                            <span className="project-name">Mina</span>
                                        </td>
                                        <td><a target="_blank" href="https://minaprotocol.com/">website</a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img className="project-logo" src="./img/portfolio/near.svg"/>
                                            <span className="project-name">Near</span>
                                        </td>
                                        <td><a target="_blank" href="https://near.org/">website</a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img className="project-logo" src="./img/portfolio/polkadot.svg"/>
                                            <span className="project-name">Polkadot</span>
                                        </td>
                                        <td><a target="_blank" href="https://polkadot.network/">website</a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img className="project-logo" src="./img/portfolio/polygon.svg"/>
                                            <span className="project-name">Polygon</span>
                                        </td>
                                        <td><a target="_blank" href="https://polygon.technology/">website</a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img className="project-logo" src="./img/portfolio/qredo.svg"/>
                                            <span className="project-name">Qredo</span>
                                        </td>
                                        <td><a target="_blank" href="https://www.qredo.com/">website</a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img className="project-logo" src="./img/portfolio/ripple.svg"/>
                                            <span className="project-name">Ripple</span>
                                        </td>
                                        <td><a target="_blank" href="https://ripple.com/">website</a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img className="project-logo" src="./img/portfolio/solana.svg"/>
                                            <span className="project-name">Solana</span>
                                        </td>
                                        <td><a target="_blank" href="https://solana.com/">website</a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img className="project-logo" src="./img/portfolio/solanax.png"/>
                                            <span className="project-name">Solanax</span>
                                        </td>
                                        <td><a target="_blank" href="https://solanax.org/">website</a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img className="project-logo" src="./img/portfolio/solanium.svg"/>
                                            <span className="project-name">Solanium</span>
                                        </td>
                                        <td><a target="_blank" href="https://www.solanium.io/">website</a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img className="project-logo" src="./img/portfolio/swarm.svg"/>
                                            <span className="project-name">Swarm</span>
                                        </td>
                                        <td><a target="_blank" href="https://www.ethswarm.org/">website</a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img className="project-logo" src="./img/portfolio/thegraph.svg"/>
                                            <span className="project-name">The Graph</span>
                                        </td>
                                        <td><a target="_blank" href="https://thegraph.com/">website</a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img className="project-logo" src="./img/portfolio/throne.jpg"/>
                                            <span className="project-name">Throne</span>
                                        </td>
                                        <td><a target="_blank" href="https://www.thr.one/">website</a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img className="project-logo" src="./img/portfolio/vega.png"/>
                                            <span className="project-name">Vega</span>
                                        </td>
                                        <td><a target="_blank" href="https://vega.xyz/">website</a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img className="project-logo" src="./img/portfolio/unvest.jpg"/>
                                            <span className="project-name">Unvest</span>
                                        </td>
                                        <td><a target="_blank" href="https://www.unvest.io/">website</a></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer id="contact">
                <div className="container">
                    <div className="footer-info-block">
                        <div className="section-title">Contact us</div>
                        <div className="footer-info-description">
                            <p>
                                Always looking to expand our portfolio and invest in new
                                prospective projects, Blocked Chain Capital can be contacted
                                by email, in case you would like to partner with us.
                            </p>
                            <p>
                                Email: <a className="link" href="mailto:hello@theblockedchain.com">hello@theblockedchain.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Home