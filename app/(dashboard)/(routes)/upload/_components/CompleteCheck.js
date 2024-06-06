import React from 'react'

function CompleteCheck() {
  return (
    <div>
      <section className="rounded-3xl shadow-2xl">
        <div className="p-8 text-center sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Your File has been 
          </p>

          <h2 className="mt-6 text-3xl font-bold">
            Uploaded
          </h2>

          {/* <a
            className="mt-8 inline-block w-full rounded-full bg-pink-600 py-4 text-sm font-bold text-white shadow-xl"
            href="#"
          >
            Track Order
          </a> */}
        </div>
      </section>
    </div>
  );
}

export default CompleteCheck