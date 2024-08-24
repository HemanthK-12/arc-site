import Card from '@/components/Card'
import ContactForm from '@/components/ContactForm'
import Link from '@/components/Link'
import MemberCard from '@/components/MemberCard'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import resourcesData from '@/data/resourcesData'
import siteMetadata from '@/data/siteMetadata'
import { useTheme } from 'next-themes'
import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import logo from '../assets/ARC_logo_white.png'
import nvidia_img from '../assets/nvidia.png'
import { data } from './../data/membersData'

export default function Home() {
  const { theme, setTheme, __ } = useTheme()

  {
    ;() => setTheme('dark')
  }

  const [membersData, setMembersData] = useState([])
  const [wait, setWait] = useState(true)

  useEffect(() => {
    const prop = data
    let randomIndexUsed = {}
    let numberOfPosts = 3
    let randomIndex = Math.floor(Math.random() * prop.length)
    for (let i = 0; i < numberOfPosts; i++) {
      while (randomIndexUsed[randomIndex]) {
        randomIndex = Math.floor(Math.random() * prop.length)
      }
      membersData.push(prop[randomIndex])

      randomIndexUsed[randomIndex] = 1
    }
    setWait(false)
  }, [])

  return (
    <>
      <Head>
        <title>ARC-BPHC</title>
      </Head>
      <ScrollTopAndComment />
      <div className="flex flex-col items-center justify-center text-center">
        <div
          className="bodyBackground pointer-events-auto flex w-full justify-center bg-cover bg-no-repeat"
          style={{ minHeight: 100 + 'vh' }}
        >
          <div className="header pointer-events-auto z-[2] m-0 flex w-1/2 flex-col items-center justify-center text-center">
            <div style={{ width: '50%', height: 'auto', position: 'relative' }}>
              <Image
                src={logo}
                className="logo-scaling shrink invert dark:invert-0"
                alt="Transparent Logo"
                layout="responsive"
                objectFit="contain"
              />
            </div>
            <h1 className="pt-8">
              <span className="site-title font-montserratSans text-4xl font-bold text-black dark:text-white md:text-6xl">
                Automation &amp; Robotics Club
              </span>
            </h1>
            <h1 className="p-6">
              <span className="site-description font-montserratSans text-2xl text-black dark:text-white md:text-4xl">
                Electronics | Design | Programming
              </span>
            </h1>

            <div className="header-icons mb-2 flex">
              <Link
                aria-label="Send email"
                href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=arc@hyderabad.bits-pilani.ac.in"
                target="_blank"
                rel="noreferrer"
                className="group pointer-events-auto rounded-full p-2"
              >
                <div className="rounded-full border-2 border-black p-2 transition-colors duration-700 ease-in-out group-hover:border-black group-hover:bg-black dark:border-white dark:group-hover:bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    className="h-12 w-12 invert-0 hover:invert dark:invert dark:hover:invert-0"
                  >
                    <path d="M 43.753906 6.4023438 C 42.53621 6.3489969 41.294792 6.712898 40.271484 7.46875 L 37.525391 9.4960938 L 25 18.755859 L 12.591797 9.5839844 A 1.0001 1.0001 0 0 0 11.949219 9.3007812 L 12.199219 9.3007812 L 9.734375 7.4765625 C 8.7104042 6.7188363 7.4671493 6.3528895 6.2480469 6.40625 C 5.0289444 6.4596105 3.8349462 6.9314667 2.9082031 7.8457031 C 1.7309454 9.0063798 1 10.629831 1 12.410156 L 1 15.84375 A 1.0001 1.0001 0 0 0 1 16.138672 L 1 39.5 C 1 41.421188 2.5788117 43 4.5 43 L 12 43 A 1.0001 1.0001 0 0 0 13 42 L 13 25.373047 L 24.40625 33.804688 A 1.0001 1.0001 0 0 0 25.59375 33.804688 L 37 25.373047 L 37 42 A 1.0001 1.0001 0 0 0 38 43 L 45.5 43 C 47.421188 43 49 41.421188 49 39.5 L 49 16.119141 A 1.0001 1.0001 0 0 0 49 15.859375 L 49 12.410156 C 49 10.6517 48.290455 9.0357821 47.128906 7.8730469 C 47.095336 7.8394769 47.084086 7.83018 47.097656 7.84375 A 1.0001 1.0001 0 0 0 47.091797 7.8378906 C 46.165242 6.9256756 44.971603 6.4556905 43.753906 6.4023438 z M 43.644531 8.4003906 C 44.400835 8.4300436 45.134049 8.7168876 45.689453 9.2636719 C 45.708363 9.2823439 45.722171 9.2964424 45.712891 9.2871094 C 46.50934 10.084374 47 11.188613 47 12.410156 L 47 15.496094 L 39 21.408203 L 39 11 A 1.0001 1.0001 0 0 0 38.996094 10.898438 L 41.458984 9.078125 A 1.0001 1.0001 0 0 0 41.460938 9.078125 C 42.109578 8.598977 42.888228 8.3707375 43.644531 8.4003906 z M 6.3574219 8.40625 C 7.1145694 8.37661 7.8958927 8.6037105 8.5449219 9.0839844 L 11.003906 10.902344 A 1.0001 1.0001 0 0 0 11 11 L 11 21.408203 L 3 15.496094 L 3 12.410156 C 3 11.174482 3.5017577 10.068855 4.3125 9.2695312 C 4.8677569 8.7217677 5.6002743 8.4358895 6.3574219 8.40625 z M 37 12.371094 L 37 22.886719 L 25 31.755859 L 13 22.886719 L 13 12.373047 L 24.40625 20.804688 A 1.0001 1.0001 0 0 0 25.59375 20.804688 L 37 12.371094 z M 3 17.982422 L 11 23.896484 L 11 41 L 4.5 41 C 3.6591883 41 3 40.340812 3 39.5 L 3 17.982422 z M 47 17.982422 L 47 39.5 C 47 40.340812 46.340812 41 45.5 41 L 39 41 L 39 23.896484 L 47 17.982422 z" />
                  </svg>
                </div>
              </Link>
              <Link
                aria-label="Discord"
                href={siteMetadata.discord}
                target="_blank"
                rel="noreferrer"
                className="group pointer-events-auto rounded-full p-2"
              >
                <div className="rounded-full border-2 border-black p-2 transition-colors duration-700 ease-in-out group-hover:border-black group-hover:bg-black dark:border-white dark:group-hover:bg-white">
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    className="h-12 w-12 invert-0 hover:invert dark:invert dark:hover:invert-0"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                  </svg>
                </div>
              </Link>
              <Link
                aria-label="My Github"
                target="_blank"
                href="https://github.com/arc-bphc"
                rel="noreferrer"
                className="group pointer-events-auto rounded-full p-2"
              >
                <div className="rounded-full border-2 border-black p-2 transition-colors duration-700 ease-in-out group-hover:border-black group-hover:bg-black dark:border-white dark:group-hover:bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-12 w-12 fill-black transition-colors duration-700 ease-in-out group-hover:fill-white dark:fill-white dark:group-hover:fill-black"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
              </Link>
              <Link
                aria-label="My Facebook"
                target="_blank"
                href="https://www.facebook.com/automationandroboticsclub"
                rel="noreferrer"
                className="group pointer-events-auto rounded-full p-2"
              >
                <div className="rounded-full border-2 border-black p-2 transition-colors duration-700 ease-in-out group-hover:border-black group-hover:bg-black dark:border-white dark:group-hover:bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 480 512"
                    className="h-12 w-12 fill-black p-1 transition-colors duration-700 ease-in-out group-hover:fill-white dark:fill-white dark:group-hover:fill-black"
                  >
                    <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
                  </svg>
                </div>
              </Link>
            </div>
            <div className="flex-column mx-5 md:flex">
              <div className="flex">
                <Link
                  className="link pointer-events-auto p-2 text-xl"
                  href="/projects"
                  data-scroll=""
                >
                  Projects
                </Link>
                <Link
                  className="link pointer-events-auto p-2 text-xl"
                  href="/resources"
                  data-scroll=""
                >
                  Resources
                </Link>
                <Link className="link pointer-events-auto p-2 text-xl" href="/blog" data-scroll="">
                  Blog
                </Link>
              </div>

              <div className="flex justify-center">
                <Link
                  className="header-vertical-line pointer-evengit puts-auto hidden p-2 text-xl md:block"
                  data-scroll=""
                >
                  |
                </Link>
                <Link className="link pointer-events-auto p-2 text-xl" href="#about">
                  About
                </Link>
                <Link className="link pointer-events-auto p-2 text-xl" href="/team">
                  Team
                </Link>
                <Link
                  className="link pointer-events-auto p-2 text-xl"
                  href="#contact"
                  data-scroll=""
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          id="about"
          className="z-[2] m-0 flex w-4/5 flex-col items-center justify-center text-center"
          style={{ minHeight: 100 + 'vh' }}
        >
          <span className="p-4 font-montserratSans text-4xl font-medium">About Us</span>
          <span className="p-4 font-montserratSans text-xl">
            {' '}
            The Automation and Robotics Club (ARC) is a part of the Technical Senate of BITS Pilani,
            Hyderabad Campus. If inquisitiveness and innovation are your assets, then you've found
            the right place for yourself. We take up promising challenges, workshops and projects
            which combine the aspects of electronics, mechanics and programming. The only
            prerequisite to joining us - the desire to quench curiosity and express yourself{' '}
          </span>

          <div className="flex-column md:flex">
            <Card
              key={'Level Up'}
              title={'Level Up'}
              description={`A gamified bootcamp to get you started in the fields of robotics, 
              mastering topics ranging from basic electronics and programming to 
              simulations and mechanical design`}
              imgSrc={'/static/images/level-up-font.png'}
              href={'/resources/levelup23/0-introduction'}
            />

            <Card
              key={'Workshops'}
              title={'Workshops'}
              description={`Various intriguing workshops conducted throughout the year, which
               effortlessly combine learning with enjoyment`}
              imgSrc={'/static/images/workshop.jpg'}
              href={'/resources/workshop/1-AboutTheWorkshop'}
            />

            <Card
              key={'Projects'}
              title={'Projects'}
              description={`Several inter-disciplinary projects including a Robotic Arm, Laser Harp, UAV,
              self-playing instruments and much more`}
              imgSrc={'/static/images/resources/1954436.jpg'}
              href={'/projects'}
            />
          </div>
        </div>

        <div
          className="z-[2] m-0 flex w-4/5 flex-col items-center justify-center text-center"
          style={{ minHeight: 100 + 'vh' }}
        >
          <span className="p-4 font-montserratSans text-4xl font-medium">Spotlight</span>
          <span className="p-4 font-montserratSans text-xl">
            {' '}
            Meet three new members of our club everytime you refresh this page.{' '}
          </span>
          <div className="flex-column md:flex">
            {/* Check membersData.js */}
            {!wait &&
              membersData.map((member) => {
                return (
                  <MemberCard
                    key={member.id}
                    title={member.name}
                    description={member.quote}
                    imgSrc={member.picture}
                    facebook={member.facebook}
                    linkedin={member.linkedin}
                    github={member.github}
                  />
                )
              })}
          </div>
        </div>

        <div
          className="z-[2] m-0 flex w-4/5 flex-col items-center justify-center text-center"
          style={{ minHeight: 50 + 'vh' }}
        >
          <span className="p-4 font-montserratSans text-4xl font-medium"> Our Sponsors</span>
          <div className="flex w-full items-center justify-center text-center">
            <Image
              alt={'Nvidia Jetson'}
              src={nvidia_img}
              className="object-contain object-center md:h-36 lg:h-48"
              width={544}
              height={306}
            />
          </div>
        </div>

        <div
          id="contact"
          className="z-[2] m-0 flex w-4/5 flex-col items-center justify-center text-center"
          style={{ minHeight: 100 + 'vh' }}
        >
          <span className="p-4 font-montserratSans text-4xl font-medium">Contact Us</span>
          <span className="w-full p-4 font-montserratSans text-xl">
            <ContactForm />
          </span>
        </div>

        <footer className="z-[2] w-full bg-white p-3 dark:bg-gray-900 sm:p-6">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link
                href="https://www.bits-pilani.ac.in/hyderabad/"
                className="flex-column items-center md:flex"
              >
                <img src="static/images/bits_logo.png" className="h-15 mx-2" alt="ARC Logo" />
                {/* <span className="self-center text-2xl font-semibld whitespace-nowrap dark:text-white">Automation and Robotics Club</span> */}
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-4 sm:gap-6">
              <div className="mb-6 items-center md:mb-0">
                <span className="mb-8 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                  Faculty InCharges
                </span>
                <p className="mt-4 mb-1 text-gray-400">Dr Y.V.D. Rao</p>
                <p className="text-gray-400">Dr Abhishek Sarkar</p>
              </div>
              <div className="mb-6 items-center md:mb-0">
                <span className="mb-8 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                  President
                </span>
                <p className="mt-4 mb-1 text-gray-400">Nilay Girgaonkar</p>
                <p className="text-gray-400">+91 84118 13239</p>
              </div>
              <div className="mb-6 items-center md:mb-0">
                <span className="mb-8 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                  Resources
                </span>
                <ul className="mt-4 text-gray-600 dark:text-gray-400">
                  {resourcesData.map((resource) => {
                    return (
                      <li className="mb-1" key={resource.id}>
                        <Link href={resource.href} className="hover:underline">
                          {resource.title}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div className="mb-6 items-center md:mb-0">
                <span className="mb-8 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                  About us
                </span>
                <ul className="mt-4 text-gray-600 dark:text-gray-400">
                  <li className="mb-1">
                    <Link href="/team" className="hover:underline ">
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="hover:underline">
                      About
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
              © 2022{' '}
              <Link href="/" className="hover:underline">
                Automation and Robotics Club
              </Link>
              . All Rights Reserved.
            </span>
            <div className="mt-4 flex justify-center space-x-6 sm:mt-0">
              <Link
                href={siteMetadata.facebook}
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Facebook page</span>
              </Link>
              <Link
                href={siteMetadata.instagram}
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Instagram page</span>
              </Link>
              <Link
                href={siteMetadata.github}
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">GitHub account</span>
              </Link>
            </div>
          </div>
        </footer>
      </div>

      <style jsx>
        {`
          .header {
            -webkit-user-select: none; /* Safari */
            -ms-user-select: none; /* IE 10 and IE 11 */
            user-select: none; /* Standard syntax */
          }
        `}
      </style>
    </>
  )
}
