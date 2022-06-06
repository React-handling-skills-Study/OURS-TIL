// 단일 키워드로 검색하거나 정확한 일치를 위해 전체 구문을 따옴표로 묶습니다. q=tesla 또는 q="elon musk"
//  관련 없는 결과를 제거 하려면 기사에 나타나야 하는 단어와 그렇지 않은 단어 를 지정 하십시오.q=gamestop +stonks -sell
//  부울 연산자 AND / OR / NOT 및 대괄호가 지원되므로 다음을 수행할 수 있습니다.q=(crypto AND bitcoin) NOT ethereum
//  제목 또는 콘텐츠 내에서 구체적으로 검색을 제한합니다.qInTitle="title search"
// 2주 미만의 기사에 관심이 있으십니까?from=2022-05-18
// 과거 특정 기간의 뉴스에 집중from=2020-05-16&to=2020-05-30
// 또는 공란으로 남겨두면 최신 뉴스를 받아볼 수 있습니다.
// 14개 언어 중 하나로 검색 제한: language=en,language=jp
// ?q= 해당 키워드 검색 정확한 일치가 필요하다면 q=""로 검색하게 한다.
// from=date&to=date : 특정 기간 뉴스 검색
// sortBy= 인기순 정렬 relevancy: 밀접하게 관련있는 기사가 먼저 온다.(관련순) popularity: 인기 있는 출처 및 게시자의 기사가 먼저 표시된다.(인기순) publishedAt 최신 기사가 먼저 표시된다(최신순)
// sortBy의 default는 publishedAt
// pageSize= 페이지당 보여질 뉴스의 수
// page = 페이지 숫자
// contry= 나라별 (한국:kr)
// category = 카테고리별: business, entertainment, general health, science, sports, technology / category는 sources와 혼합할 수 없다.
// sources= 매체별
// endpoint - everything: 4년간 출판된 모든 기사 검색. 뉴스 분석 및 기사 검색에 알맞는 endpoint
// top-headlines - 국가,카테고리 및 단일 게시자에 대한 속보 헤드라인. 실시간 최신 뉴스 헤드라인을 사용하는 곳에 적합하다.
// Response object
// status, totalResults, articles, source, author, title, description, url, urlTolmage, publishedAt, content
//example : https://newsapi.org/v2/everything?q=apple&from=2022-05-31&to=2022-05-31&sortBy=popularity&apiKey=5994945209a145fd87580605965704ee
//example2 : https://newsapi.org/v2/everything?q=tesla&from=2022-05-01&sortBy=publishedAt&apiKey=5994945209a145fd87580605965704ee
//example3 : https://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=5994945209a145fd87580605965704ee
//example4 : https://newsapi.org/v2/everything?q=MZ%EC%84%B8%EB%8C%80&from=2022-05-01&apiKey=5994945209a145fd87580605965704ee
//example5 : https://newsapi.org/v2/everything?q=%EB%A3%A8%EB%82%98&from=2022-05-01&sortBy=publishedAt&apiKey=5994945209a145fd87580605965704ee

import axios from 'axios'

const SEARCHNEWS_API = 'https://newsapi.org/v2/everything'
const HEADLINE_API = 'https://newsapi.org/v2/top-headlines'
const API_KEY = 'fc6feda2f1494c178cfa2b3206437328'

export const getHeadline = async (category = 'business', page = 1) => {
	const url = `${HEADLINE_API}?country=kr&category=${category}&page=${page}&apiKey=${API_KEY}`
	const res = await axios.get(url)
	return res.data
}
