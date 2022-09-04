import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const SubmissionSuccess = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 10000);

    return () => clearTimeout(timer);
  });

  return (
    <section className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <main>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Communication Bridge Established
          </p>
          <h1 className="py-4 text-gray-700">
            Message Sent <span className="text-[#5651e5]">Successfully</span>!
          </h1>
          <h2 className="py-2 text-gray-700">
            I&apos;ll get back to you shortly
          </h2>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Thank you for your inquiry. I&apos;ll reach out to you as soon as I
            see the message in my inbox. In the meantime, check out my{' '}
            <Link href="/#projects">
              <a className="text-[#5651e5] underline">projects</a>
            </Link>
            , otherwise automatically sending you back to the{' '}
            <Link href="/">
              <a className="text-[#5651e5] underline">homepage</a>
            </Link>{' '}
            shortly...
          </p>
        </main>
      </div>
    </section>
  );
};

export default SubmissionSuccess;
