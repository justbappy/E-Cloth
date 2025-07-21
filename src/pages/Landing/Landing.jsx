import { Suspense, useState } from "react";
import Navigation from "../../components/Navigation/Navigation";
import CircularIndeterminate from "../../components/Progress/Progress";
import CTAButton from "../../components/CTAButton/CTAButton";
import CatBox from "../../components/CatBox/CatBox";
import HotProductCard from "../../components/HotProductCard/HotProductCard";
import UserReview from "../../components/UserReview/UserReview";
import Footer from "../../components/Footer/Footer";

const Landing = () => {
    const LandingNavArr = ["Home", "Shop", "About Us","Contact"];
    const CategoryItems = ["Men's Fashion", "Women's Fashion", "Kids Wear", "Footwear", "Winter Arrivals", "Other Accessories"];
    const hotProducts = 
        [
            {
                productID: 0,
                productURL: "/images/hotProducts/one.png",
                productName: 'Funky-Z Shoe',
            },
            {
                productID: 1,
                productURL: "/images/hotProducts/two.png",
                productName: 'Black-String'
            },
            {
                productID: 2,
                productURL: "/images/hotProducts/three.png",
                productName: 'Gre-ninja'
            },
            {
                productID: 3,
                productURL: "/images/hotProducts/four.png",
                productName: 'Funky-Brown'
            },
            {
                productID: 4,
                productURL: "/images/hotProducts/five.png",
                productName: 'Hood-Boy'
            },
            {
                productID: 5,
                productURL: "/images/hotProducts/six.png",
                productName: 'Shiny-Plasma'
            },
            {
                productID: 6,
                productURL: "/images/hotProducts/seven.png",
                productName: 'Curvvyy'
            },
            {
                productID: 7,
                productURL: "/images/hotProducts/eight.png",
                productName: 'Goatic'
            },
        ]
    const reviews = [
        {
            userName: 'Nikhil Pawar',
            userProfile: '/images/user-reviews/two.jpg',
            reviewDate: '09/08/2025',
            userReview: 'Amazing fashion shop for new generations filled with attractive things.'
        },
        {
            userName: 'Faran Shaikh',
            userProfile: '/images/user-reviews/four.jpg',
            reviewDate: '12/05/2025',
            userReview: 'I finally found a brand that fits my vibe perfectly.'
        },
        {
            userName: 'Daniel Park',
            userProfile: '/images/user-reviews/three.jpg',
            reviewDate: '04/03/2025',
            userReview: 'The quality is amazing and the style is just wow!'
        },
    ] 

    return (
    <div>
        {/* navigation component */}
        <Navigation arr={LandingNavArr}/>

        {/* hero section and lazy loading component*/}
        <Suspense fallback={<CircularIndeterminate/>}>
            <section className="px-4 md:py-0 xs:py-4 md:h-[100vh] sm:h-[50vh] xs:h-[70vh] landing-hero flex flex-col gap-2 justify-center sm:items-end xs:items-center">
                <h1 className="md:text-[3rem] sm:text-[2rem] xs:text-[2rem] font-[sprintura] sm:w-[45%] xs:w-[100%] tracking-wide sm:text-start xs:text-center xs:text-white sm:text-black">Your Style Starts Here</h1>
                <h3 className="md:text-[1.7rem] sm:text-[1rem] xs:text-[18px] sm:w-[45%] xs:w-[100%] tracking-wide sm:text-start xs:text-center xs:text-white sm:text-black">Explore the latest trends in fashion - from streetwear to timeless classics.</h3>
                {/* call to action button component */}
                <div className="sm:w-[45%] xs:w-[100%] flex gap-4 sm:justify-start sm:items-start xs:justify-center">
                    <CTAButton ctaName="Shop New Arrivals" link="new-arrivals"/>
                    <CTAButton ctaName="Discover Trends" link="discover-trends"/>
                </div>
            </section>
        </Suspense>

        {/* shop by category section */}
        <section className="container py-10 flex flex-col gap-3">
            <h1 className="md:text-[4rem] sm:text-[3rem] xs:text-[1.7rem] text-center">Our Categories</h1>
            <div className="catGrid">
                <CatBox categoryItems={CategoryItems}/>
            </div>
        </section>

        {/* limited time offer section */}
        <section className="bg-[#1a1a1a] text-[#e0e0e0] py-10 my-10 flex flex-col items-center gap-4">
            <div className="text-center">
                <h1 className="md:text-[3rem] sm:text-[2rem] xs:text-[1.3rem]">Seasonal Sale - Upto 50% Off</h1>
                <p className="md:text-[1.5rem] sm:text-[1rem] xs:text-[13px]">Don't miss out on exclusive deals across all categories. Limited time only</p>
            </div>
            <CTAButton ctaName="Shop the Sale" link="shop-sale"/>
        </section>

        {/* hot right now section*/}
        <section className="container">
            <h1 className="md:text-[4rem] sm:text-[3rem] xs:text-[1.7rem] text-center">Hot Right Now</h1>
            <div className="hotProducts">
                <HotProductCard hotProducts={hotProducts}/>
            </div>
        </section>

        {/* reviews section */}
        <div className="container py-10">
            <h1 className="md:text-[4rem] sm:text-[3rem] xs:text-[1.7rem] text-center">Customer Reviews</h1>
            <div className="userReview mt-4">
                <UserReview review={reviews}/>
            </div>
        </div>

        {/* sign up letter section */}
        <section className="bg-[#1a1a1a] text-[#e0e0e0] py-10 my-10 flex flex-col items-center gap-4">
            <div className="text-center">
                <h1 className="md:text-[3rem] sm:text-[2rem] xs:text-[1.3rem]">Join Our Fashion Fam</h1>
                <p className="lg:text-[1.5rem] sm:text-[1rem] xs:text-[13px] xs:px-10 xs:text-center">Sign up to get 10% off your first order, plus style tips, new drops & exclusive deals.</p>
            </div>
            <CTAButton ctaName="Sign-up" link="register"/>
        </section>

        <footer>
            <Footer/>
        </footer>
    </div>
    )
}


export default Landing;