import { Card } from 'react-bootstrap';


const Technologies = () => {

    const techItemsArray = [
        {
            // img : require('../../images/techImages/Software-Development.png'),
            title : 'Custom Software Development',
            // flippedImg : require('../../images/techImages/software-svg.png'),
            flippedTitle : 'Custom Software Development',
            flippedText : 'You get a customised software developed that helps your business run more efficiently and effectively.'
        },
        {
            // img : require('../../images/techImages/Web-Development.png'),
            title : 'Web Development',
            flippedImg : require('../../images/techImages/web-svg.png'),
            flippedTitle : 'Web Development',
            flippedText : 'We provide you stunning web solutions curated especially for you that reflects your brand and meets your business goals.'
        },
        {
            // img : require('../../images/techImages/Mobile-App-Development.png'),
            title : 'Mobile App Development',
            // flippedImg : require('../../images/techImages/mob-svg.png'),
            flippedTitle : 'Mobile App Development',
            flippedText : 'Engage your customers with a beautifully designed mobile app providing smooth user experience for your business.'
        },
        // {
        //     // img : require('../../images/techImages/Cloud-Security.png'),
        //     title : 'Cloud Security',
        //     // flippedImg : require('../../images/techImages/cloud-svg.png'),
        //     flippedTitle : 'Cloud Security',
        //     flippedText : 'Security is essential in the internet world today. Unlock the benefits of the cloud to help you in migrating and maintaining your data.'
        // },
        // {
        //     // img : require('../../images/techImages/Testing-QA.png'),
        //     title : 'Testing Q/A',
        //     // flippedImg : require('../../images/techImages/cloud-svg.png'),
        //     flippedTitle : 'Testing Q/A',
        //     flippedText : 'Get rigorous quality assurance to ensure flawless performance and reliability of your digital products.'
        // },
        // {
        //     // img : require('../../images/ui.png'),
        //     title : 'UI/UX Design',
        //     // flippedImg : require('../../images/techImages/cloud-svg.png'),
        //     flippedTitle : 'UI/UX Design',
        //     flippedText : 'Elevating user experiences through creating intuitive designs that captivate and engage your audience.'
        // },
        // {
        //     // img : require('../../images/app.jpg'),
        //     title : 'Application Services',
        //     // flippedImg : require('../../images/techImages/cloud-svg.png'),
        //     flippedTitle : 'Application Services',
        //     flippedText : 'Upgrade your crafted software solutions to meet your specific business needs and drive growth.'
        // },
        // {
        //     // img : require('../../images/techImages/SEO-Optimisation.png'),
        //     title : 'SEO Optimisation',
        //     // flippedImg : require('../../images/techImages/seo-svg.png'),
        //     flippedTitle : 'SEO Optimisation',
        //     flippedText : 'Get your website noticed and increase traffic with our help in optimising your website for search engines.'
        // },
        // {
        //     // img : require('../../images/techImages/IT.png'),
        //     title : 'IT Consultation',
        //     // flippedImg : require('../../images/techImages/IT-svg.png'),
        //     flippedTitle : 'IT Consultation',
        //     flippedText : 'Let us guide you in making the right technology investments to achieve your business goals. Sometimes all you need is to have a word with the right minds.'
        // },
    ]
    

    let width = window.innerWidth
    let number
    if(width > 480){
        number = 3
    }else{
        number = 4
    }

    return (
        <>
            <div className=" d-flex flex-wrap mb-md-5 my-3 mt-md-0 tech-card-section ">
                {
                    click ?
                    techItemsArray.map((data,i)=>{
                        return(
                            <>
                            {
                                i < number ?
                                <div className="col-md-4 col-6 my-2 px-xl-5 px-lg-3 px-1" key={i} >
                                    <div className="tech-card">
                                        <div className='unflipped flip'>
                                            <Card className=' border-radius p-2'>
                                                {/* <Card.Img loading='lazy' alt='Card Img' variant="top" src={data.img} height={300} /> */}
                                            </Card>
                                            <div className="card-txt text-white">
                                                <h4>{data.title}</h4>
                                            </div>
                                        </div>

                                        <div className='flipped-card d-none flip' >
                                            <Card className='border-radius'>
                                                <Card.Body>
                                                    <div className="inside-card mt-md-3">
                                                        <div className="icon mb-md-4 mb-2">
                                                            {/* <img src={data.flippedImg} alt="Icon" width='120%' /> */}
                                                        </div>
                                                        <h5>{data.flippedTitle}</h5>
                                                        <p>{data.flippedText}</p>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    </div>
                                </div>
                                :
                                <></>
                            }
                            </>
                        )
                    })
                    :
                    width > 480 ?
                    techItemsArray.map((data,i)=>{
                        return(
                            <div className="col-md-4 col-6 my-2 px-xl-5 px-lg-3 px-1" key={i} >
                                <div className="tech-card">
                                    <div className='unflipped flip'>
                                        <Card className=' border-radius p-2'>
                                            {/* <Card.Img loading='lazy' alt='Card Img' variant="top" src={data.img} height={300} /> */}
                                        </Card>
                                        <div className="card-txt text-white">
                                            <h4>{data.title}</h4>
                                        </div>
                                    </div>

                                    <div className='flipped-card d-none flip' >
                                        <Card className='border-radius'>
                                            <Card.Body>
                                                <div className="inside-card mt-md-3">
                                                    <div className="icon mb-md-4 mb-2">
                                                        {/* <img src={data.flippedImg} alt="Icon" width='120%' /> */}
                                                    </div>
                                                    <h5>{data.flippedTitle}</h5>
                                                    <p>{data.flippedText}</p>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    :
                    techItemsArray.map((data,i)=>{
                        return(
                            <>
                                {
                                    i !== 6 && (
                                        <div className="col-md-4 col-6 my-2 px-lg-5 px-1" key={i} >
                                            <div className="tech-card">
                                                <div className='unflipped flip'>
                                                    <Card className=' border-radius p-2'>
                                                        {/* <Card.Img loading='lazy' alt='Card Img' variant="top" src={data.img} height={300} /> */}
                                                    </Card>
                                                    <div className="card-txt text-white">
                                                        <h4>{data.title}</h4>
                                                    </div>
                                                </div>

                                                <div className='flipped-card d-none flip' >
                                                    <Card className='border-radius'>
                                                        <Card.Body>
                                                            <div className="inside-card mt-md-3">
                                                                <div className="icon mb-md-4 mb-2">
                                                                    {/* <img src={data.flippedImg} alt="Icon" width='120%' /> */}
                                                                </div>
                                                                <h5>{data.flippedTitle}</h5>
                                                                <p>{data.flippedText}</p>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </>
                        )
                    })
                    

                }
            </div>
        </>
    )
}

export default Technologies;
