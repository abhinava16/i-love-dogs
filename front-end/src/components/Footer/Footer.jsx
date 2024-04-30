import React from 'react'
import { Link, NavLink } from 'react-router-dom';

function Footer() {
  return (
      <footer className="bg-white border-y">
          <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
              <div className="md:flex md:justify-between">
                  <div className="mb-6 md:mb-0">
                      <Link to="/" className="flex items-center">
                          <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzCT_IVk9ACZXzM6V8NUqzFOKk0cV6oDsu1Q&usqp=CAU"
                              className="mr-3 h-16"
                              alt="Logo"
                          />
                      </Link>
                  </div>
                  <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                      <div>
                          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                          <ul className="text-gray-500 font-medium">
                              <li className="mb-4">
                                  <Link to="/" className="hover:underline">
                                      Home
                                  </Link>
                              </li>
                              <li>
                                  <Link to="/about" className="hover:underline">
                                      About
                                  </Link>
                              </li>
                          </ul>
                      </div>
                      <div>
                          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Quick Links</h2>
                          <ul className="text-gray-500 font-medium">
                              <li className="mb-4">
                                  <Link to="training" className="hover:underline">
                                      Our Trainers
                                  </Link>
                              </li>
                              <li>
                                  <Link to="maintainence" className="hover:underline">
                                      Maintainence
                                  </Link>
                              </li>
                          </ul>
                      </div>
                      
                      <div>
                          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                          <ul className="text-gray-500 font-medium">
                              <li className="mb-4">
                                  <Link to="/" className="hover:underline">
                                      Privacy Policy
                                  </Link>
                              </li>
                              <li>
                                  <Link to="/" className="hover:underline">
                                      Terms &amp; Conditions
                                  </Link>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
              <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
              <div className="sm:flex sm:items-center sm:justify-between">
                  <span className="text-sm text-gray-500 sm:text-center">
                      © 2024
                      <a href="/" className="hover:underline">
                          . I Love Dogs
                      </a>
                      . All Rights Reserved.
                  </span>
              </div>
          </div>
      </footer>
  );
}
export default Footer