const Section = ({ id, title, children }) => (
  <section id={id} className="py-4 px-4"> {/* Reduced py-10 to py-8 for less vertical padding */}
    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6"> {/* Increased mb-4 to mb-6 for more space below title */}
    {title}
  </h2>
    {children}
  </section>
);

export default Section;