

function Categories({ post }) {

    var lookup = {};
    var items = post;
    var result = [];
 

  for (var item, i = 0; (item = items[i++]); ) {
    var name = item.BlogCategory;

    if (!(name in lookup)) {
      lookup[name] = 1;
      result.push(name);
    }
    console.log(result);
  }
   
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Categories</h3>
      {result.map((category, index) => (
        // <Link key={index} href={`/category/${category.slug}`}>
          <span
            className="cursor-pointer block  pb-3 mb-3"         >
            {category}
          </span>
        // </Link>
      ))}
    </div>
  );
 }
export default Categories;

