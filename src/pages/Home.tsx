import React from 'react';
import { Link } from 'react-router-dom';
import { useWeb3 } from '../contexts/Web3Context';
import { 
  CubeTransparentIcon, 
  UsersIcon, 
  GiftIcon,
  ChartBarIcon,
  ArrowRightIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  CodeBracketIcon,
  WalletIcon,
} from '@heroicons/react/24/outline';

import FuzzyText from '../../src/components/FuzzyText';
import Orb from '../../src/components/Orb';

    const Home: React.FC = () => {
      const { isConnected } = useWeb3();

      const features = [
      {
        icon: GiftIcon,
        title: 'Token Rewards',
        description: 'Get paid in Tokens for the open-source work you already love doing — no paperwork, just smart contracts.',
        color: 'text-accent-green',
        gradient: 'from-accent-green to-accent-emerald'
      },
      {
        icon: UsersIcon,
        title: 'Community Validation',
        description: 'Your contributions are reviewed and valued by fellow developers — fair, open, and based on real impact.',
        color: 'text-accent-purple',
        gradient: 'from-accent-purple to-accent-violet'
      },
      {
        icon: CubeTransparentIcon,
        title: 'DAO Governance',
        description: 'Have a say in how things work. Vote, suggest, and help steer the future of open-source funding together.',
        color: 'text-neon-blue',
        gradient: 'from-neon-blue to-primary-400'
      },
      {
        icon: ChartBarIcon,
        title: 'Impact Analytics',
        description: 'See the difference you’re making with simple, clear insights into how your code helps the community.',
        color: 'text-accent-orange',
        gradient: 'from-accent-orange to-neon-yellow'
      }
    ];


  const stats = [
    { label: 'Contributors', value: '1,234', suffix: '+', icon: '👥' },
    { label: 'Tokens Distributed', value: '2.5M', suffix: '', icon: '💰' },
    { label: 'Active Proposals', value: '47', suffix: '', icon: '📋' },
    { label: 'Projects Funded', value: '156', suffix: '+', icon: '🚀' },
  ];

  return (
    <div className="space-y-20 animate-fade-in">
      {/* Hero Section */}
      <section className="relative px-4 py-20 text-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-neon-blue/10 rounded-full animate-float blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent-purple/10 rounded-full animate-float blur-xl" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-neon-pink/5 to-neon-blue/5 rounded-full animate-pulse"></div>
        </div>
        
      <div className="relative z-10 max-w-6xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-dark-200/50 to-dark-300/50 px-4 py-2 rounded-full border border-neon-blue/30 mb-8 animate-slide-up group hover:border-neon-blue/60 transition-all duration-300 shadow-lg shadow-neon-blue/10 hover:shadow-neon-blue/20">
            {/* <BoltIcon className="w-5 h-5 text-neon-blue group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" /> */}
          
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          
            <span className="text-sm text-neon-blue font-semibold tracking-wider bg-gradient-to-r from-neon-blue to-accent-purple bg-clip-text text-transparent">
              Revolutionizing Open Source Funding
            </span>
          </div>

        <div className="relative z-10 max-w-6xl mx-auto">
            {/* Top-left Orb (first one) */}
            <div style={{ 
              width: '300px', 
              height: '300px',
              position: 'absolute', 
              top: '-100px',  // Adjust to move higher
              left: '-130px', // Adjust to move left
              zIndex: '-1',
              opacity: 0.7    // Optional: make it more subtle
            }}>
              <Orb
                hoverIntensity={0.62}
                rotateOnHover={true}
                hue={317}
                forceHoverState={true}
              />
            </div>

            {/* Main heading with centered Orb (second one) */}
            <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-slide-up relative">
              <span className="shiny-steel-text">OSSIUM</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-violet-500 to-red-500 bg-clip-text text-transparent 
                  [text-shadow:_0_0_6px_rgba(110,231,183,0.3)_0_0_12px_rgba(34,211,238,0.2)]">
                Rewarding Open Source
              </span>
              
              {/* Centered bottom Orb */}
              <div style={{ 
                width: '200%', 
                height: '300px',
                margin: '0 auto',
                position: 'absolute', 
                top: '80%', 
                left: '0', 
                transform: 'translateY(-20%)',
                zIndex: '-1'
              }}>
                <Orb
                  hoverIntensity={0.62}
                  rotateOnHover={true}
                  hue={317}
                  forceHoverState={true}
                />
              </div>
            </h1>
          </div>


          <p className="text-xl md:text-2xl text-dark-600 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <span className="text-neon-blue font-semibold">Empowering</span> open-source developers with 
          <span className="text-accent-purple font-semibold"> recognition</span>, 
          <span className="text-accent-green font-semibold"> crypto rewards</span>, and 
          <span className="text-accent-purple font-semibold"> global peer validation</span> — join the 
          <span className="text-neon-blue font-semibold"> decentralized future</span> with Ossium.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            {isConnected ? (
              <Link
                to="/dashboard"
                className="btn-neon px-10 py-4 text-lg flex items-center space-x-3 group whitespace-nowrap"
              >
                <RocketLaunchIcon className="w-6 h-6 group-hover:rotate-12 transition-transform flex-shrink-0" />
                <span>Launch Dashboard</span>
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </Link>
            ) : (
              <div className="card-cyber px-8 py-4 animate-pulse">
                <div className="flex items-center space-x-3">
                  <ShieldCheckIcon className="w-6 h-6 text-neon-blue flex-shrink-0" />
                  <p className="text-dark-600">Connect your wallet to access the platform</p>
                </div>
              </div>
            )}
            <Link
              to="/contributions"
              className="btn-cyber px-10 py-4 text-lg group flex items-center space-x-2 whitespace-nowrap"
            >
              <span>Explore Ecosystem</span>
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold neon-text mb-4 animate-slide-up">Platform Metrics</h2>
          <p className="text-dark-600 animate-slide-up" style={{ animationDelay: '0.1s' }}>Real-time impact of our decentralized ecosystem</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="card-cyber text-center floating-card holographic" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold neon-text mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-sm text-dark-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold neon-text mb-6 animate-slide-up">
            How The System Works
          </h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
            A transparent, <span className="text-neon-blue">blockchain-powered</span> process for recognizing and rewarding valuable open-source work
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="card-cyber floating-card group hover:scale-105 transition-all duration-500" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${feature.gradient} flex items-center justify-center group-hover:animate-pulse`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-neon-blue transition-colors">
                  {feature.title}
                </h3>
                <p className="text-dark-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

        {/* Process Steps */}
        <section className="px-4">
          <div className="card-cyber p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold neon-text mb-4">
                Get Started in 3 Steps
              </h3>
              <p className="text-dark-600">A simple, no-fuss onboarding flow to start earning from your code.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              {/* Step 1 */}
              <div className="text-center group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-neon-blue to-primary-400 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto shadow-neon animate-pulse">
                    1
                  </div>
                  <div className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-neon-blue to-primary-400 rounded-full mx-auto opacity-50 animate-ping"></div>
                </div>
                <h4 className="text-xl font-bold text-white mb-4 group-hover:text-neon-blue transition-colors">Submit Your Work</h4>
                <p className="text-dark-600 leading-relaxed">
                  Share your open-source contribution — whether it’s a PR, issue fix, or feature — and tell us why it matters.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-accent-purple to-accent-violet rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto shadow-neon animate-pulse" style={{ animationDelay: '0.5s' }}>
                    2
                  </div>
                  <div className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-accent-purple to-accent-violet rounded-full mx-auto opacity-50 animate-ping" style={{ animationDelay: '0.5s' }}></div>
                </div>
                <h4 className="text-xl font-bold text-white mb-4 group-hover:text-neon-blue transition-colors">Community Validation</h4>
                <p className="text-dark-600 leading-relaxed">
                  Fellow developers review and vote on your contribution’s impact — powered by transparent, blockchain-based consensus.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-accent-green to-accent-emerald rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto shadow-neon animate-pulse" style={{ animationDelay: '1s' }}>
                    3
                  </div>
                  <div className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-accent-green to-accent-emerald rounded-full mx-auto opacity-50 animate-ping" style={{ animationDelay: '1s' }}></div>
                </div>
                <h4 className="text-xl font-bold text-white mb-4 group-hover:text-neon-blue transition-colors">Earn Crypto Rewards</h4>
                <p className="text-dark-600 leading-relaxed">
                  Once approved, you’ll automatically earn OSS tokens — no forms, no delays, just smart contract magic.
                </p>
              </div>
            </div>
          </div>
        </section>

       {/* CTA Section */}
      <section className="px-4 text-center">
        <div className="relative card-cyber p-12 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 via-accent-purple/10 to-neon-pink/10 animate-pulse"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center space-x-2 mb-6 pl-2 text-center">
              <FuzzyText 
              baseIntensity={0.2} 
              hoverIntensity={0.1} 
              enableHover={false}
              >
            OSSIUM
          </FuzzyText>
            </div>
            <h3 className="text-4xl font-bold neon-text mb-6">
              Ready to Get Rewarded?
            </h3>
            <p className="text-xl text-dark-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Be part of a <span className="text-accent-green font-semibold">global developer movement</span> earning crypto 
              for <span className="text-neon-blue font-semibold">open-source contributions</span> — powered by the decentralized web.
            </p>

            {isConnected ? (
              <Link
                to="/contributions"
                className="btn-neon px-12 py-4 text-lg group inline-flex items-center space-x-3 whitespace-nowrap"
              >
                <CodeBracketIcon className="w-6 h-6 group-hover:scale-110 transition-transform flex-shrink-0" />
                <span>Submit Your First Contribution</span>
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </Link>
            ) : (
              <div className="inline-block">
                <div className="bg-gradient-to-r from-dark-300/50 to-dark-400/50 px-8 py-4 rounded-lg border border-neon-blue/30">
                  <div className="flex items-center space-x-3">
                    <WalletIcon className="w-6 h-6 text-neon-blue animate-[ping_1.5s_ease-in-out_infinite] flex-shrink-0" />
                    <p className="text-white font-semibold">Connect your wallet to start earning</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 