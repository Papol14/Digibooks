"use client";
import { useEffect, useState } from "react";

const Page: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Welcome to Digibooks Store</h1>

      {isMounted && (
        <>
          <section className="mb-8">
            <p className="mb-4">
              At Digibooks Store, we&apos;re passionate about empowering
              individuals on their journey to digital excellence. Founded with
              the vision of making premium digital education accessible to
              everyone, we&apos;ve curated a carefully selected collection of
              learning resources, from comprehensive AI courses to
              expert-crafted e-books.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="mb-4">
              We believe that knowledge should be both accessible and
              actionable. Our mission is to bridge the gap between aspiration
              and achievement by providing high-quality digital products that
              help you master new skills, advance your career, and unlock your
              full potential in the digital age.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">What Sets Us Apart</h2>
            <p className="mb-4">
              Our marketplace stands out through our unwavering commitment to
              quality and relevance. Each product in our collection is:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Thoroughly vetted for excellence and practical value</li>
              <li>Created by industry experts and experienced practitioners</li>
              <li>Regularly updated to reflect the latest developments</li>
              <li>Designed for real-world application</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Product Range</h2>
            <p className="mb-4">
              Discover our diverse selection of digital resources:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                Professional Freelancing Guides: Launch and grow your
                freelancing career with proven strategies and insider insights
              </li>
              <li>
                AI Mastery Programs: Stay ahead of the curve with cutting-edge
                artificial intelligence training materials
              </li>
              <li>
                Specialized E-books: Deep dive into specific topics with our
                comprehensive digital publications
              </li>
              <li>
                Learning Materials: Access structured resources designed to
                accelerate your learning journey
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Commitment</h2>
            <p className="mb-4">
              Beyond being just a marketplace, Digibooks Store is a community of
              learners and achievers. We&apos;re committed to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Ensuring the highest quality of digital products</li>
              <li>Providing excellent customer support</li>
              <li>Maintaining competitive pricing</li>
              <li>Regular updates to our product catalogue</li>
              <li>Supporting our customers&apos; growth journey</li>
            </ul>
          </section>

          <section className="mb-8">
            <p className="mb-4">
              Join thousands of successful professionals who have transformed
              their careers through our carefully curated digital resources. At
              Byte Bazaar, your success is our priority.
            </p>
            <p className="font-semibold">
              Ready to elevate your skills? Start exploring our collection
              today.
            </p>
          </section>
        </>
      )}
    </div>
  );
};

export default Page;
