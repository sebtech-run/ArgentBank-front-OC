import React from 'react';
import Banner from '../../components/banner/banner';
import Nav from '../../components/navigation/nav';
import Footer from '../../components/footer/footer';
import FeatureItem from '../../components/featureItem/featureItem';

import iconChat from '../../assets/icon-chat.png';
import iconMoney from '../../assets/icon-money.png';
import iconSecurity from '../../assets/icon-security.png';

import '../../styles/pages/index.css';

 // Feature's titles

  const featureTitleChat = 'You are our #1 priority'
  const featureTitleMoney = 'More savings means higher rates'
  const featureTitleSecurity = 'Security you can trust'

  // Feature's texts

  const featureTextChat =
    'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.'
  const featureTextMoney =
    'The more you save with us, the higher your interest rate will be!'
  const featureTextSecurity =
    'We use top of the line encryption to make sure your data and money is always safe.'

  /* ===== Features Content ===== */


const Index = () => {
    return (
        <>
      <Nav />
      <main>
        <Banner />
        <section className="features">
          <FeatureItem
            iconUrl={iconChat}
            title={featureTitleChat}
            text={featureTextChat}
          />
          <FeatureItem
            iconUrl={iconMoney}
            title={featureTitleMoney}
            text={featureTextMoney}
          />
          <FeatureItem
            iconUrl={iconSecurity}
            title={featureTitleSecurity}
            text={featureTextSecurity}
          />
        </section>
      </main>
      <Footer />
    </>
    );
};

export default Index;