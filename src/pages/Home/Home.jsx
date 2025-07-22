import { Link } from "react-router-dom";
import BannerSlider from "../../components/BannerSlider/BannerSlider";
import BottomNav from "../../components/BottomNav/BottomNav";
import HomeCartItem from "../../components/HomeCartItem/HomeCartItem";
import Navigation from "../../components/Navigation/Navigation";
import CategoryBox from "../../components/CategoryBox/CategoryBox";
import UpcomProd from "../../components/UpcomProd/UpcomProd";
import Footer from "../../components/Footer/Footer";

const Home = () => {
    const homeNav = ["Home", "Shop", "Men", "Women", "Kids", "Others"];
    const cartProducts = [
        {
            productName: 'Blacky-zacky',
            productDescription: "This is a trendy black shirt which will enhance your aura and your rizz level will goes up while walking",
            productPrice: '299',
            productURL: '/images/products/nine.png'
        },
        {
            productName: 'Blacky-zacky',
            productDescription: "This is a trendy black shirt which will enhance your aura and your rizz level will goes up while walking",
            productPrice: '299',
            productURL: '/images/products/ten.png'
        },
        {
            productName: 'Blacky-zacky',
            productDescription: "This is a trendy black shirt which will enhance your aura and your rizz level will goes up while walking",
            productPrice: '299',
            productURL: '/images/products/three.png'
        },
        {
            productName: 'Blacky-zacky',
            productDescription: "This is a trendy black shirt which will enhance your aura and your rizz level will goes up while walking   ",
            productPrice: '299',
            productURL: '/images/products/one.png'
        },
    ]
    const popMen = [
        {
            productName: 'Blacky-zacky',
            productDescription: "This is a trendy black shirt which will enhance your aura and your rizz level will goes up while walking",
            productPrice: '299',
            productURL: '/images/products/nine.png'
        },
        {
            productName: 'Blacky-zacky',
            productDescription: "This is a trendy black shirt which will enhance your aura and your rizz level will goes up while walking",
            productPrice: '299',
            productURL: '/images/products/five.png'
        },
        {
            productName: 'Blacky-zacky',
            productDescription: "This is a trendy black shirt which will enhance your aura and your rizz level will goes up while walking",
            productPrice: '299',
            productURL: '/images/products/six.png'
        },
        {
            productName: 'Blacky-zacky',
            productDescription: "This is a trendy black shirt which will enhance your aura and your rizz level will goes up while walking   ",
            productPrice: '299',
            productURL: '/images/products/ten.png'
        },
    ]
    const popWomen = [
        {
            productName: 'Blacky-zacky',
            productDescription: "This is a trendy black shirt which will enhance your aura and your rizz level will goes up while walking",
            productPrice: '299',
            productURL: '/images/products/eleven.png'
        },
        {
            productName: 'Blacky-zacky',
            productDescription: "This is a trendy black shirt which will enhance your aura and your rizz level will goes up while walking",
            productPrice: '299',
            productURL: '/images/products/twelve.png'
        },
        {
            productName: 'Blacky-zacky',
            productDescription: "This is a trendy black shirt which will enhance your aura and your rizz level will goes up while walking",
            productPrice: '299',
            productURL: '/images/products/thirteen.png'
        },
        {
            productName: 'Blacky-zacky',
            productDescription: "This is a trendy black shirt which will enhance your aura and your rizz level will goes up while walking   ",
            productPrice: '299',
            productURL: '/images/products/fourteen.png'
        },
    ]

    const categoryItems = [
        {
            categoryName: 'Men',
            categoryImage: '/images/popCat/one.png'
        },
        {
            categoryName: 'Women',
            categoryImage: '/images/popCat/two.png'
        },
        {
            categoryName: 'Kids',
            categoryImage: '/images/popCat/three.png'
        },
        {
            categoryName: 'Sweatshirts',
            categoryImage: '/images/popCat/four.png'
        },
        {
            categoryName: 'Hoodies',
            categoryImage: '/images/popCat/five.png'
        },
    ]

    const upcomProds = [
        {
            productImage: '/images/upcomProd/one.jpg'
        },
        {
            productImage: '/images/upcomProd/two.jpg'
        },
        {
            productImage: '/images/upcomProd/three.jpg'
        },
        {
            productImage: '/images/upcomProd/four.jpg'
        },
        {
            productImage: '/images/upcomProd/five.jpg'
        },
        {
            productImage: '/images/upcomProd/six.jpg'
        },
    ]

    return (
    <div>
        {/* navigation component */}
        <Navigation arr={homeNav}/>

        {/* search and cart, wishlist */}
        <BottomNav/>

        {/* hero banner */}
        <div className="py-5">
            <BannerSlider/>
        </div>

        {/* cart items */}
        <div className="container">
            <div className="flex justify-between">
                <h1 className="sm:text-[25px]">Your Cart Items</h1>
                <Link to={'/cart'} className="underline text-blue-500 sm:text-[20px]">View all</Link>
            </div>
            <div className="xs:px-2 xs:py-3 sm:p-0">
                <HomeCartItem cartProducts={cartProducts}/>
            </div>
        </div>

        {/* popular Categories */}
        <div className="mt-10">
            <h1 className="sm:text-[40px] xs:text-[30px] text-center ">Popular Categories</h1>
            <div className=" xs:overflow-x-scroll py-2 noScroll">
                <CategoryBox categoryItems={categoryItems}/>
            </div>
        </div>

        {/* Upcoming winter products */}
        <div className="mt-10">
            <h1 className="sm:text-[40px] xs:text-[20px] text-center ">Upcoming winter and other products</h1>
            <UpcomProd upcomProds={upcomProds}/>
        </div>

        {/* popular men items */}
        <div className="container py-10">
            <div className="flex justify-between">
                <h1 className="sm:text-[40px] xs:text-[20px] text-center ">Popular for Men</h1>
                <Link to={'/cart'} className="underline text-blue-500 sm:text-[20px]">View all</Link>
            </div>
            <div className="xs:px-2 xs:py-3 sm:p-0">
                <HomeCartItem cartProducts={popMen}/>
            </div>
        </div>

        {/* popular women items */}
        <div className="container py-5">
            <div className="flex justify-between">
                <h1 className="sm:text-[40px] xs:text-[20px] text-center ">Popular for Women</h1>
                <Link to={'/cart'} className="underline text-blue-500 sm:text-[20px]">View all</Link>
            </div>
            <div className="xs:px-2 xs:py-3 sm:p-0">
                <HomeCartItem cartProducts={popWomen}/>
            </div>
        </div>

        {/* popular kid items */}
        <div className="container py-5">
            <div className="flex justify-between">
                <h1 className="sm:text-[40px] xs:text-[20px] text-center ">Popular for Kids</h1>
                <Link to={'/cart'} className="underline text-blue-500 sm:text-[20px]">View all</Link>
            </div>
            <div className="xs:px-2 xs:py-3 sm:p-0">
                <HomeCartItem cartProducts={popMen}/>
            </div>
        </div>

        {/* sign up letter section */}
        <section className="bg-[#1a1a1a] text-[#e0e0e0] py-10 my-10 flex flex-col items-center gap-4">
            <div className="text-center">
                <h1 className="md:text-[3rem] sm:text-[2rem] xs:text-[1.3rem]">For service and help</h1>
                <p className="lg:text-[1.5rem] sm:text-[1.3rem] xs:text-[13px] xs:px-10 xs:text-center">Please visit our nearest center in your location</p>
            </div>
        </section>

        {/* footer */}
        <footer>
            <Footer/>
        </footer>
    </div>
    )
}

export default Home;