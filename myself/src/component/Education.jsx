import myImage from '/picture/StockCake-Creative Desktop Setup_1723891320.jpg';

function Education () {
    return(
        <div>
            <div style={{display: 'flex', }}>  
                <img src={myImage} 
                    alt="Description of image" 
                    style={{
                    margin: '60px 0 0 15px',
                    width: '200px', 
                    height: '200px', 
                    border: '2px solid white', 
                    borderRadius: '20px' }} />
                <div style={{margin: '45px 0 0 15px'}}>
                   <h2>
                        EDUCATION
                    </h2>
                    <span style={{margin: '0 0 0 40px'}}>
                        I am a new graduate interested in the position of Junior Full Stack Developer, 
                        able to coordinate with others. and have high computer skills Where I can apply 
                        my skills to your team success.
                    </span>
                </div>
            </div>
            <div style={{margin: '20px 0 0 20px'}}>
                <span >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    A illum sint impedit nobis molestiae voluptate incidunt ab laboriosam, 
                    recusandae accusantium omnis corrupti harum consequuntur vero quod tempora, 
                    at architecto quidem.
                </span>
            </div>
        </div>
    )
}

export default Education