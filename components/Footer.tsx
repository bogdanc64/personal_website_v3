import React from 'react'

function Footer() {
  const todayDate = new Date(Date.now());

  return (
    <footer className="p-4 justify-center bottom-0 mt-auto flex md:p-6">
        <span className="text-md text-primary dark:text-primary text-center">© {todayDate.getFullYear()} Bogdan Maftei.
        </span>
    </footer>
  )
}

export default Footer