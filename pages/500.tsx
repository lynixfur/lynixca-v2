import WebLayout from "@/components/layouts/WebLayout";
import Head from "next/head";
import CyberImage from "@/components/CyberImage";

export default function InternalError() {
    return (
        <>
            <Head>
                <title>LynixCA - 500 Error</title>
                <meta name="title" content="LynixCA"/>
                <meta name="description" content="Take a look at my pages to learn more about my background and achievements!"/>
                <meta name="keywords" content="cybersecurity, student, lynix, lynix.ca, furry, sysadmin, it, pentesting, devops"/>
                <meta name="robots" content="index, follow"/>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
                <meta name="language" content="English"/>
            </Head>
            <div className="flex justify-center items-center h-screen w-full">
                <div>
                    <div className="flex justify-center">
                        <CyberImage src="/imgs/LynixCute-Small.png" alt="Lynix Cute" containerClassName="h-[250px] w-[200px]"/>
                    </div>
                    <h1 className="text-3xl text-gray-300 font-cyber text-center">
                        <span className="text-green-700 text-6xl pb-2"><span className="text-cyan-700">[</span>500<span className="text-cyan-700">]</span></span><br/> Internal Server Error <br/><br/>
                        <span className="text-lg">Something went wrong with the Freak Network, try again later.</span>
                    </h1>
                </div>
            </div>
        </>
    )
}