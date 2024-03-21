import React from 'react'


const Blogs = () => {
    const data = [
        {
            imgUrl: "https://cdn.hashnode.com/res/hashnode/image/upload/v1632542928537/P8bFer1yG.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
            title: "Big Data Case Study on Information Security",
            desc: "Information security, abbreviated to infosec , is a broader category or a set of practices intended to keep data secure from unauthorized access . This practice is done for both stored data or data being transmitted from one place to another or from physical location .It also refers to data security .",
            link: "https://codeprotein.hashnode.dev/big-data-case-study-on-information-security"
        },
        // {
        //     imgUrl: "",
        //     title: "",
        //     desc: "",
        //     link: ""
        // },
        {
            imgUrl: "https://cdn.hashnode.com/res/hashnode/image/upload/v1632519527653/It3FUCzOS.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
            title: "Energy Efficiency and Reliability in Cloud Computing",
            desc: "Cloud computing is made with a combination of two words Cloud and Computing. Cloud refers to the servers that are accessed over the internet(Present at a remote location). Computing is a process to use computers for complete oriented tasks .by the combination of these two words cloud computing is made which refers to virtualizing technology to provide a powerful and flexible computing environment.",
            link: "https://codeprotein.hashnode.dev/energy-efficiency-and-reliability-in-cloud-computing"
        },
        {
            imgUrl: "https://cdn.hashnode.com/res/hashnode/image/upload/v1632518542716/reeTjaMrn.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
            title: "NoSQL Databases",
            desc: "NoSql databases are Non-tabular, and store data differently than the relational tables . No Sql databases come in types of variety based on their data model . NoSql databases offer flexible schema and scale easily with large amounts of data and higher user loads.",
            link: "https://codeprotein.hashnode.dev/nosql-databases"
        },
    ]
    return (
                <div id="blog" className='container-fluid' style={{ minHeight: "100vh", marginTop: "5rem" }}>
                    <h1 className='row justify-content-center text-decoration-underline'>Blogs</h1>
                    <div className='row'>

                        {data.map(item => {
                            return (
                                <div className="col-md-4 p-5">
                                    <div className="card" style={{ Width: "18rem" }}>
                                        <img src={item.imgUrl} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title" style={{ height: "60px" }} >{item.title}</h5>
                                            <p className="card-text" style={{ height: "3rem", overflow: 'hidden', textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.desc}</p>
                                            <a href={item.link} className="btn btn-dark">Read</a>
                                        </div>
                                    </div>
                                </div>)
                        })}



                    </div>
                </div>
    )
}

export default Blogs