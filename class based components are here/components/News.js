import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 9,
        category: 'general',
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }
    /*articles = [
      // {
      //     "source": {
      //         "id": "cnn",
      //         "name": "CNN"
      //     },
      //     "author": null,
      //     "title": "Japan Airlines jet bursts into flames after collision with earthquake relief plane at Tokyo Haneda airport - CNN",
      //     "description": "A Japan Airlines plane carrying hundreds of passengers burst into flames at Tokyo’s Haneda airport after it was in collision with an earthquake relief aircraft.",
      //     "url": "https://www.cnn.com/2024/01/02/asia/japan-airlines-plane-fire-airport-intl-hnk/index.html",
      //     "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/240102100732-03-haneda-plane-incident-010224.jpg?c=16x9&q=w_800,c_fill",
      //     "publishedAt": "2024-01-02T12:31:00Z",
      //     "content": "At least five people are reported to have been killed when a Japan Airlines plane carrying hundreds of passengers collided with an earthquake relief aircraft and burst into flames on landing at Tokyo… [+2492 chars]"
      // },
      // {
      //     "source": {
      //         "id": "cnn",
      //         "name": "CNN"
      //     },
      //     "author": "Stephen Collinson",
      //     "title": "Trump’s courtroom and campaign trail collision is about to become a reality - CNN",
      //     "description": "The presidential election is about to become inextricably entangled with Donald Trump’s criminal turmoil as his crushing calendar of legal obligations collides with the race to the Iowa caucuses in two weeks.",
      //     "url": "https://www.cnn.com/2024/01/02/politics/trump-2024-campaign-courtroom-collision/index.html",
      //     "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/240101172807-trump-file-010124.jpg?c=16x9&q=w_800,c_fill",
      //     "publishedAt": "2024-01-02T12:30:00Z",
      //     "content": "The presidential election is about to become inextricably entangled with Donald Trumps criminal turmoil as his crushing calendar of legal obligations collides with the race to the Iowa caucuses in tw… [+8815 chars]"
      // },
      // {
      //     "source": {
      //         "id": "associated-press",
      //         "name": "Associated Press"
      //     },
      //     "author": "ILLIA NOVIKOV",
      //     "title": "Russia-Ukraine war: 4 killed as ballistic missiles hit Kharkiv and Kyiv - The Associated Press",
      //     "description": "Ukraine’s two largest cities have come under heavy Russian ballistic missile attacks. The barrages Tuesday killed at least two people and injured dozens as the war approached its two-year milestone. The governor of the Kharkiv region said one person died and …",
      //     "url": "https://apnews.com/article/russia-ukraine-kharkiv-kyiv-2b23b1163c859a645b485d5c38035369",
      //     "urlToImage": "https://dims.apnews.com/dims4/default/5302431/2147483647/strip/true/crop/8640x4860+0+450/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F0a%2Fc7%2F669d336d85a8494e591387ce7a08%2F3702a08bdf194a9bac6d4748ad666573",
      //     "publishedAt": "2024-01-02T11:15:00Z",
      //     "content": "KYIV, Ukraine (AP) Ukraines two largest cities came under heavy Russian ballistic missile attacks Tuesday, killing at least two people and injuring dozens as the war approached its two-year milestone… [+2091 chars]"
      // },
      // {
      //     "source": {
      //         "id": "syracuse",
      //         "name": "syracuse.com"
      //     },
      //     "author": "Geoff Herbert | gherbert@syracuse.com",
      //     "title": "3 dead in fiery crash at Upstate NY concert; Syracuse man suspected of possible terror attack - syracuse.com",
      //     "description": "Police said there were at least a dozen gasoline canisters in and around the suspect's vehicle.",
      //     "url": "https://www.syracuse.com/news/2024/01/2-dead-in-fiery-crash-at-upstate-ny-concert-syracuse-man-suspected-of-possible-terror-attack.html",
      //     "urlToImage": "https://www.syracuse.com/resizer/9A0wDGGcsJc82EEcDPs_97Ed8hc=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/INI5ST447BGG7GTMSC7RYFM2NI.jpg",
      //     "publishedAt": "2024-01-02T11:11:00Z",
      //     "content": "Three people are dead and four others are injured after a possible domestic terrorism attack outside a New Years Eve concert in Upstate New York.\r\nThe Associated Press reports police are investigatin… [+3019 chars]"
      // },
      // {
      //     "source": {
      //         "id": "cnbc",
      //         "name": "CNBC"
      //     },
      //     "author": "Elliot Smith",
      //     "title": "Stock and bond markets will see a 'year for non-consensus' in 2024, technical strategist says - CNBC",
      //     "description": "Stocks are in for a rough year and the U.S. 10-year Treasury yield is set to jump back above 5%, according to one strategist.",
      //     "url": "https://www.cnbc.com/2024/01/02/markets-will-see-a-year-for-non-consensus-in-2024-strategist-says.html",
      //     "urlToImage": "https://image.cnbcfm.com/api/v1/image/107350683-1703178602492-NYSE_Traders-OB-20231221-CC-4.jpg?v=1703178687&w=1920&h=1080",
      //     "publishedAt": "2024-01-02T10:48:54Z",
      //     "content": "Traders work on the floor of the New York Stock Exchange.\r\nStocks could be in for a rough year while the U.S. 10-year Treasury yield is set to jump back above 5% in what may become a \"year for non-co… [+4216 chars]"
      // },
      // {
      //     "source": {
      //         "id": "cnn",
      //         "name": "CNN"
      //     },
      //     "author": "Laura He",
      //     "title": "BYD inches closer to overtaking Tesla as world’s top electric car company - CNN",
      //     "description": "BYD says it has sold a record number of electric vehicles (EV) in 2023, as it moves closer to displacing Tesla as the world leader in the competitive industry.",
      //     "url": "https://www.cnn.com/2024/01/02/cars/china-byd-ev-sales-increase-tesla-intl-hnk/index.html",
      //     "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230913101934-europe-china-electric-car-subsidies.jpg?c=16x9&q=w_800,c_fill",
      //     "publishedAt": "2024-01-02T09:11:00Z",
      //     "content": "Editors Note: Sign up for CNNs Meanwhile in China newsletter, which explores what you need to know about the countrys rise and how it impacts the world.\r\nChinas BYD sold a record number of cars in 20… [+3696 chars]"
      // },
      // {
      //     "source": {
      //         "id": "espn",
      //         "name": "ESPN"
      //     },
      //     "author": "Kyle Bonagura",
      //     "title": "Heisman or not, Michael Penix Jr. cemented his legacy in the CFP semifinal - ESPN",
      //     "description": "With 430 passing yards, Penix was dominant in guiding Washington to a win over Texas in the CFP semifinal.",
      //     "url": "https://www.espn.com/college-football/story/_/id/39225154/college-football-playoff-washington-michael-penix-jr-dominant-sugar-bowl",
      //     "urlToImage": "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0102%2Fr1272701_1296x729_16%2D9.jpg",
      //     "publishedAt": "2024-01-02T07:59:00Z",
      //     "content": "NEW ORLEANS -- Michael Penix Jr. arrived in Seattle two years ago hoping to revive his career. He'll leave as a Huskies legend.\r\nOn the biggest stage of his career, Penix turned in his greatest perfo… [+5085 chars]"
      // },
      // {
      //     "source": {
      //         "id": "engadget",
      //         "name": "Engadget"
      //     },
      //     "author": "Richard Lai",
      //     "title": "US reportedly halted ASML's chipmaking machine shipments to China weeks before ban - Engadget",
      //     "description": "The US reportedly asked ASML \"weeks before\" the export ban deadline to halt some chipmaking machine shipments to China.",
      //     "url": "https://www.engadget.com/us-reportedly-halted-asmls-chipmaking-machine-shipments-to-china-weeks-before-ban-075407978.html",
      //     "urlToImage": "https://s.yimg.com/ny/api/res/1.2/rhWdB_zc7mGTRersTdrLuQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-12/6c1332f0-a941-11ee-923f-9862424184fe",
      //     "publishedAt": "2024-01-02T07:54:00Z",
      //     "content": "NVIDIA may have figured out a way to go around the US export restrictions on China, but apparently ASML, the Dutch firm behind the key chipmaking equipment, isn't having much say on this end. Accordi… [+1646 chars]"
      // },
      // {
      //     "source": {
      //         "id": "business-insider",
      //         "name": "Business Insider"
      //     },
      //     "author": "Huileng Tan",
      //     "title": "China economy: Xi admits 'tough time' for some enterprises, jobs - Business Insider",
      //     "description": "An official survey of China's manufacturers showed  factory activity contracted for the third straight month in December.",
      //     "url": "https://www.businessinsider.com/china-economy-gdp-xi-jinping-admits-tough-time-enterprises-jobs-2024-1",
      //     "urlToImage": "https://i.insider.com/659387201c5c7b8c9a0d2894?width=1200&format=jpeg",
      //     "publishedAt": "2024-01-02T07:42:00Z",
      //     "content": "China's economy has been struggling to stage a convincing comeback. Now, even Chinese leader Xi Jinping has acknowledged the many challenges the country's economy faced in 2023.\r\n\"Some enterprises ha… [+1571 chars]"
      // },
      // {
      //     "source": {
      //         "id": "techcrunch",
      //         "name": "TechCrunch"
      //     },
      //     "author": "Ivan Mehta",
      //     "title": "Meta cuts prices for the Quest 2 headset and accessories - TechCrunch",
      //     "description": "Months after Meta launched its Quest 3 headset, the company is slashing prices for its older Quest 2 headset by $50 permanently.",
      //     "url": "https://techcrunch.com/2024/01/01/meta-cuts-prices-for-quest-2-headset-and-accessories/",
      //     "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/07/GettyImages-1239009531.jpg?resize=1200,800",
      //     "publishedAt": "2024-01-02T06:33:00Z",
      //     "content": "Months after Meta launched its Quest 3 headset, the company is slashing prices for its older Quest 2 headset by $50 permanently.\r\nThe 128GB version drops from $299 to $249 and the 256GB version drops… [+1061 chars]"
      // },
      // {
      //     "source": {
      //         "id": "cnn",
      //         "name": "CNN"
      //     },
      //     "author": "Thomas Schlachter, Jill Martin, Homero De la Fuente",
      //     "title": "College Football Playoff: Michigan Wolverines and Washington Huskies advance to National Championship - CNN",
      //     "description": "The Michigan Wolverines and Washington Huskies have advanced to the College Football Playoff National Championship where they’ll face off in Houston on January 8 in the title game.",
      //     "url": "https://www.cnn.com/2024/01/01/sport/college-football-playoff-how-to-watch-spt-intl/index.html",
      //     "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/240102000204-01-washington-texas-college-football-playoffs-012024.jpg?c=16x9&q=w_800,c_fill",
      //     "publishedAt": "2024-01-02T06:31:00Z",
      //     "content": "The Michigan Wolverines and Washington Huskies have advanced to the College Football Playoff National Championship where theyll face off in Houston on January 8 in the title game.\r\nIn Mondays two sem… [+4723 chars]"
      // },
      // {
      //     "source": {
      //         "id": "sammobile",
      //         "name": "SamMobile"
      //     },
      //     "author": "SamMobile, Asif Iqbal Shaik",
      //     "title": "Galaxy S24 Ultra leaks via marketing posters in Brazil, reveals Galaxy AI - SamMobile - Samsung news",
      //     "description": "Samsung can't seem to get hold of Galaxy S24 leaks. The next-generation smartphone series will be officially announced on January ...",
      //     "url": "https://www.sammobile.com/news/galaxy-s24-ultra-leaks-marketing-posters-brazil/",
      //     "urlToImage": "https://www.sammobile.com/wp-content/uploads/2024/01/Samsung-Galaxy-S24-Ultra-Titanium-Grey-720x405.jpg",
      //     "publishedAt": "2024-01-02T06:15:00Z",
      //     "content": "Samsung can't seem to get hold of Galaxy S24 leaks. The next-generation smartphone series will be officially announced on January 17, 2024, but almost all its features have leaked through several sou… [+1882 chars]"
      // },
      // {
      //     "source": {
      //         "id": "nbcsportsbayarea",
      //         "name": "Nbcsportsbayarea.com"
      //     },
      //     "author": "Michael Wagaman",
      //     "title": "Kerr doubles down on strong Warriors critique after meeting with team - NBC Sports Bay Area",
      //     "description": "Steve Kerr stands by his strong postgame comments after the Warriors’ loss to the Mavericks.",
      //     "url": "http://www.nbcsportsbayarea.com/nba/golden-state-warriors/kerr-doubles-down-on-strong-warriors-critique-after-meeting-with-team/1686795/",
      //     "urlToImage": "https://media.nbcsportsbayarea.com/2023/05/steve-kerr-USATSI-e1704158800796.jpg?quality=85&strip=all&resize=1200%2C675",
      //     "publishedAt": "2024-01-02T06:08:08Z",
      //     "content": "SAN FRANCISCO Even while he sat at home recovering from his calf injury and watching the games on TV, Gary Payton II had a sense that something was amiss from the Warriors. When he finally made his r… [+3850 chars]"
      // }
  ]*/
    constructor(props) {
        super(props);
        // console.log("Hello COnstructor!");
        this.state = {
            //   articles : this.articles,
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        };
        document.title = `NewsPedia - ${(this.props.category).charAt(0).toUpperCase() + (this.props.category).substr(1)}`
    }

    async Updatenews() {
        let url = `https://newsapi.org/v2/top-headlines?&country=${this.props.country}&category=${this.props.category}&apiKey=a0cdfce4fe2c4dcbb9d7d2eb71426af6&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        });
    }

    async componentDidMount() {
        this.Updatenews();
    }

    // handleNextClick = async () => {
    //     if (this.state.page + 1 <= (Math.ceil(this.state.totalResults / this.props.pageSize))) {
    //         this.setState({ page: this.state.page + 1 });
    //         this.Updatenews();
    //     }
    // }
    // handlePrevClick = async () => {
    //     this.setState({ page: this.state.page - 1 });
    //     this.Updatenews();
    // }

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        let url = `https://newsapi.org/v2/top-headlines?&country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();

        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false
        });
    };

    render() {
        return (
            <div /*className='container my-3'*/>
                <h2 className='text-center'>NewsPedia - Trending {(this.props.category).charAt(0).toUpperCase() + (this.props.category).substr(1)} Headlines</h2>
                {this.state.loading && <Spinner vh="vh-100" vw="vw-50" />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={this.state.loading && <Spinner vh="vh-40" vw="vw-50" />}
                >
                    <div className="container">
                        <div className="row">
                            {/*!this.state.loading &&*/ this.state.articles.map((element) => {
                                return (
                                    <div className="col-md-4 my-3" key={element.url}>
                                        <NewsItems title={element ? element.title : ""} description={element ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} time={element.publishedAt} source={element.source.name} />
                                    </div>

                                )
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-primary" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button disabled={this.state.page + 1 > (Math.ceil(this.totalResults / this.props.pageSize))} type="button" className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
                </div> */}
            </div>
        )
    }
}
