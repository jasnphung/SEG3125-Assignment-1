"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container py-5">
      <main>
        <section className="mb-5" id="about">
          <h1 className="display-4 text-center mb-3">Hi, I&apos;m Jason Phung</h1>
          <p className="lead text-center">
            I&apos;m a Computer Science student at the University of Ottawa with a growing passion for UI/UX design and front-end development.
          </p>
          <p className="text-center">
            Currently, I&apos;m working at the Public Service Commission as a Data Analyst, analyzing data to improve hiring processes and ensure fair recruitment practices.
          </p>
        </section>

        <section className="mb-5" id="how-i-work">
          <h2 className="h3 mb-3">How I Work</h2>
          <p>
            I&apos;m currently learning UI/UX design in a university course focused on design principles, user-centered design, and heuristic evaluation. I&apos;m exploring design best practices through sources like NN/g and the Interaction Design Foundation.
          </p>
          <p>
            As I learn, I am building out a design process that includes research, sketching, wireframing, prototyping, and user feedback.
          </p>
        </section>

        <section id="case-studies" className="mb-5">
          <h2 className="h3 mb-4">Case Studies</h2>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <Link href="https://seg3125-assignment-2.vercel.app/" className="text-decoration-none text-dark">
                <div className="card h-100 shadow-sm">
                  <Image src="/service.png" alt="Service Site" width={300} height={200} className="card-img-top img-fluid" />
                  <div className="card-body">
                    <h5 className="card-title">Service Website</h5>
                    <p className="card-text">Featuring Rapid AutoCare, an automotive repair business</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-3">
              <Link href="https://seg3125-assignment-3.vercel.app/" className="text-decoration-none text-dark">
                <div className="card h-100 shadow-sm">
                  <Image src="/game.png" alt="Game Design" width={300} height={200} className="card-img-top img-fluid" />
                  <div className="card-body">
                    <h5 className="card-title">Game Website</h5>
                    <p className="card-text">Featuring Quick Match, a memory card matching game</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-3">
              <Link href="https://seg3125-assignment-4.vercel.app/" className="text-decoration-none text-dark">
                <div className="card h-100 shadow-sm">
                  <Image src="/ecommerce.png" alt="E-commerce" width={300} height={200} className="card-img-top img-fluid" />
                  <div className="card-body">
                    <h5 className="card-title">E-Commerce Website</h5>
                    <p className="card-text">Featuring Closet Click, a clothing e-commerce site</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-3">
              <Link href="https://seg3125-assignment-5.vercel.app/" className="text-decoration-none text-dark">
                <div className="card h-100 shadow-sm">
                  <Image src="/analytics.png" alt="Analytics Dashboard" width={300} height={200} className="card-img-top img-fluid" />
                  <div className="card-body">
                    <h5 className="card-title">Analytics Website</h5>
                    <p className="card-text">Featuring an interactive dashboard on food spending in Canada</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="text-center py-4 border-top mt-5">
        <p className="mb-0">© {new Date().getFullYear()} Jason Phung. All rights reserved.</p>
      </footer>
    </div>
  );
}