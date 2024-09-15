
import React from "react";

interface SingleCardProps {
  image: string;
  Button?: string;
  CardDescription: string;
  CardTitle: string;
  titleHref?: string;
  btnHref?: string;
}

const FinanceGlossaryCard: React.FC = () => {
  return (
    <section className="bg-gray-2 pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div className="container">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Add your finance glossary cards here */}
          <SingleCard
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPHOkAUWUGmgv7Ccz67vxrDVSmk2Y_ZAFdWg&s"
            CardTitle="Interest Rate"
            CardDescription="The proportion of a loan that is charged as interest to the borrower."
            Button="Learn More"
            btnHref="/glossary/interest-rate"
          />
          <SingleCard
            image="https://news.stanford.edu/__data/assets/image/0026/37475/Food-and-price-inflation-rises-after-monetary-value-growth-ideas-financial-problems-and-forecasting-market-crashes-crisis-risk-the-young-man-pushed-the-shopping-cart-along-the-rising-arrow-chart.jpeg"
            CardTitle="Inflation"
            CardDescription="A general increase in prices and fall in the purchasing value of money."
            Button="Learn More"
            btnHref="/glossary/inflation"
          />
          <SingleCard
            image="https://www.datocms-assets.com/76408/1690452201-diversification-1.png"
            CardTitle="Diversification"
            CardDescription="A risk management strategy that mixes a wide variety of investments."
            Button="Learn More"
            btnHref="/glossary/diversification"
          />
          <SingleCard
            image="https://www.investopedia.com/thmb/8FOwBCmQ14qPBaDWubIR-sskHiU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/compoundinterest_final-5c67da5662ba458f8d9d229ab4ca4292.png"
            CardTitle="Compound Interest"
            CardDescription="Interest calculated on the initial principal and also on the accumulated interest."
            Button="Learn More"
            btnHref="/glossary/compound-interest"
          />
          <SingleCard
            image="https://www.worksheetsplanet.com/wp-content/uploads/2024/02/What-is-Liquidity.jpg"
            CardTitle="Liquidity"
            CardDescription="The ability to convert assets into cash quickly and easily."
            Button="Learn More"
            btnHref="/glossary/liquidity"
          />
          <SingleCard
            image="https://www.investopedia.com/thmb/a2VdLakNrwLR2lcpaQAnALZh__c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/net-worth-4192297-1-6e76a5b895f04fa5b6c10b75ed3d576f.jpg"
            CardTitle="Net Worth"
            CardDescription="The total assets minus total liabilities of an individual or a company."
            Button="Learn More"
            btnHref="/glossary/net-worth"
          />
        </div>
      </div>
    </section>
  );
};

export default FinanceGlossaryCard;

const SingleCard: React.FC<SingleCardProps> = ({
  image,
  Button,
  CardDescription,
  CardTitle,
  titleHref = "/#",
  btnHref = "#",
}) => {
  return (
    <div className="mb-10 overflow-hidden rounded-lg bg-white shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3">
      <img src={image} alt={CardTitle} className="w-full" />
      <div className="p-8 text-center">
        <h3>
          <a
            href={titleHref}
            className="mb-4 block text-xl font-semibold text-dark hover:text-primary dark:text-white"
          >
            {CardTitle}
          </a>
        </h3>
        <p className="mb-7 text-base leading-relaxed text-body-color dark:text-dark-6">
          {CardDescription}
        </p>
        {Button && (
          <a
            href={btnHref}
            className="inline-block rounded-full border border-gray-3 px-7 py-2 text-base font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-dark-6"
          >
            {Button}
          </a>
        )}
      </div>
    </div>
  );
};