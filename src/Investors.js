import React from "react";
import KidsIpad from "./img/kids_ipad.png";
import MessageSwipe from "./img/message_swipe.png";
import AddEngagement from "./img/add_engagement.png";
import Silos from "./img/silos.png";
import OverSignalOverSilos from "./img/oversignal_over_silos.png";
import "./Investor.css";

export default class Investors extends React.Component {
  render() {
    return (
      <div>
        <h1>Investors</h1>
        <h2>
          Over half of the world’s population cannot afford to use the mobile
          Internet.
        </h2>
        <p>
          The developing world has over 98% mobile phone penetration, yet use
          smart phones as dumb phones.
        </p>
        <img src={KidsIpad} alt="Kids Ipad" />
        <h2>Mobile internet connectivity means:</h2>
        <ul>
          <li>Access to an endless stream of knowledge.</li>
          <li>Global communication and news.</li>
          <li>Address, mapping, and contact information.</li>
          <li>Banking, bill paying, and shopping.</li>
          <li>Selling and making money.</li>
          <li>Collaboration and access to a global workforce.</li>
          <li>Donations and funding.</li>
          <li>Entertainment.</li>
          <li>Internet of things, cloud storage, and cloud computing,</li>
          <li>Hope for the future.</li>
        </ul>
        <p>
          Oversignal has created a patent pending way to connect the world to
          FREE mobile internet through advertising.
        </p>
        <p>
          This is the largest consumer base, and fastest growing market in the
          world.
        </p>
        <h2>
          *Over 40 million people have already provided proof to our concept.
        </h2>
        <p>
          *Jana Mobile, through a restrictive proprietary browser, connects 40
          million people to the mobile internet.
        </p>
        <p>
          “Jana is the largest provider of free internet in emerging markets.
          Through Jana’s mCent Browser, the next billion smartphone users are
          coming online without incurring data charges. Jana makes all mobile
          content freely accessible and discoverable through technology
          integrated into the billing systems of 311 mobile operators and
          available to 4.56 billion mobile subscribers. Today, Jana has provided
          over 40 million emerging market users with free, ad-sponsored internet
          access.”
        </p>
        <p>$93m </p>
        <p>Raised in 6 rounds from 3 main investors.</p>
        <h2>
          Oversignal provides free mobile minutes whenever a user engages with
          an ad or downloads a mobile app by using the keyboard.
        </h2>
        <ul>
          <li>No restrictions.</li>
          <li>No proprietary browser.</li>
          <li>No intrusion on user experience.</li>
        </ul>
        <h2>A better way:</h2>
        <div class="two-panel-display">
          <p>
            Users simply swipe their screen whenever the keyboard is present.
            This brings up a new screen filled with ad choices and app
            downloads.
          </p>
          <img src={MessageSwipe} alt="Message Swipe" />
        </div>
        <div class="two-panel-display">
          <p>
            Swiping brings up a new screen, allowing users to select app
            downloads and ads to engage with, earning free mobile minutes.
          </p>
          <img src={AddEngagement} alt="Message Swipe" />
        </div>
        <h2>
          Ads on the Oversignal platform are voluntary and are not subject to
          accidental clicks that affect 50% of mobile ads. The ads are highly
          targeted and therefore much more valuable to advertisers.
        </h2>
        <p>
          The global Internet Advertising market is valued at 195300 million USD
          in 2018 and is expected to reach 361900 million USD by the end of
          2024, growing at a CAGR of 10.8% between 2019 and 2024. The
          Asia-Pacific will occupy for more market share in following years,
          especially in China, also fast growing India and Southeast Asia
          regions.
        </p>
        <h2>
          By accessing ads and app downloads via the keyboard, a massive amount
          of clean data is available.
        </h2>
        <p>
          This creates extremely accurate and relevant ad targeting and
          eliminates the need for most data aggregation. Ad networks, such as
          inMobi, will make ideal partners due to emerging market expertise and
          saturation.
        </p>
        <h2>BIGGER BETTER DATA</h2>
        <p>
          Current data acquisition requires aggregation from Social Networks,
          Search, and other sources.
        </p>
        <h2>Currently, user generated data is locked down in silos.</h2>
        <img src={Silos} alt="Silos" />
        <h2>Oversignal acquires data BEFORE it is locked in silos</h2>
        <img src={OverSignalOverSilos} alt="Oversignal Over Silos" />
        <h2>
          No other platform allows advertisers to access data before it is
          siloed within apps.
        </h2>
        <h2>Oversignal has US and International patents pending.</h2>
        <p>
          Our first US Patent filing has received approval on every claim. IP
          includes all usage of the keyboard as a mechanism for advertising.
          Swiping of the keyboard to bring up a new window with ads and app
          downloads.
        </p>
        <h2>Our first market is over 4.56 billion people.</h2>
        <p>
          Advertising in emerging markets will be a $300 billion market in 2020.
        </p>
        <h2>85% of the WORLD are on restrictive pay-as-you-go plans.</h2>
        <h3>OUR NEXT MARKET IS THE REST OF THE WORLD.</h3>
        <h4>US Ad Market $111 Billion</h4>
        <p>Ads that people seek out:</p>
        <h4>Groupon</h4>
        <ul>
          <li>47 million unique purchases last year.</li>
          <li>
            More than 50% were happy to receive certain types of messages that
            are relevant.
          </li>
          <li>52% would take advantage of an immediate discount.</li>
          <li>46% want to receive a gift from companies.</li>
        </ul>
        <h4>Amazon</h4>
        <p>Highly relevant ads based off user data</p>
      </div>
    );
  }
}
