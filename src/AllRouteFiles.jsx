import React from 'react'
import About from './Component/About';
import Footer from './Component/Footer';
import GenerativeAl from './Component/MainPage/GenerativeAl';
import Navbar from './Component/Navbar/Navbar';
import CardSlider from './Component/WebApplicationDevelopment/CardSlider';
import OnDemandAppSlider from './Component/WebApplicationDevelopment/OnDemandAppSlider';
import WebApplication from './Component/WebApplicationDevelopment/WebApplication';
import WebApplicationMainPage from './Component/WebApplicationDevelopment/WebApplicationMainPage';
import ERPSoftware from './Component/WebApplicationDevelopment/SoftwarePages/ERPSoftware';
import TimeandSlider from './DisplayProduct/TimeandSlider';
import Main from './Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AccountingBillingSoftware from './Component/WebApplicationDevelopment/SoftwarePages/Accounting&BillingSoftware';
import SAASSoftware from './Component/WebApplicationDevelopment/SoftwarePages/SAASSoftware';
import WarehouseManagmentSoftware from './Component/WebApplicationDevelopment/SoftwarePages/WarehouseManagmentSoftware';
import HRMSSoftware from './Component/WebApplicationDevelopment/SoftwarePages/HRMSSoftware';
import InventoryManagmentSoftware from './Component/WebApplicationDevelopment/SoftwarePages/InventoryManagmentSoftware';
import POSSystemSoftware from './Component/WebApplicationDevelopment/SoftwarePages/POSSystemSoftware';
import EmployeeTrackingSoftware from './Component/WebApplicationDevelopment/SoftwarePages/EmployeeTrackingSoftware';
import AttendanceSystemSoftware from './Component/WebApplicationDevelopment/SoftwarePages/AttendanceSystemSoftware';
import LibraryManagmentSystem from './Component/WebApplicationDevelopment/SoftwarePages/LibraryManagmentSystem';
import LMSWithLiveClassSoftware from './Component/WebApplicationDevelopment/SoftwarePages/LMSWithLiveClassSoftware';
import UniversityManagmentSoftware from './Component/WebApplicationDevelopment/SoftwarePages/UniversityManagmentSoftware';
import QuizSystemSoftware from './Component/WebApplicationDevelopment/SoftwarePages/QuizSystemSoftware';
import AstrologySoftware from './Component/WebApplicationDevelopment/SoftwarePages/AstrologySoftware';
import TravelBookingSoftware from './Component/WebApplicationDevelopment/SoftwarePages/TravelBookingSoftware';
import MatrimonialSoftware from './Component/WebApplicationDevelopment/SoftwarePages/MatrimonialSoftware';
import RestaurantManagmentSystemSoftware from './Component/WebApplicationDevelopment/SoftwarePages/RestaurantManagmentSystemSoftware';
import HotelManagmentSoftware from './Component/WebApplicationDevelopment/SoftwarePages/HotelManagmentSoftware';
import EventmanagementSoftware from './Component/WebApplicationDevelopment/SoftwarePages/EventmanagementSoftware';
import HospitalManagmentSystemSoftware from './Component/WebApplicationDevelopment/SoftwarePages/HospitalManagmentSystemSoftware';
import RealstateSoftware from './Component/WebApplicationDevelopment/SoftwarePages/RealstateSoftware';
import ClinicManagmentSystemSoftware from './Component/WebApplicationDevelopment/SoftwarePages/ClinicManagmentSystemSoftware';
import MLMSoftware from './Component/WebApplicationDevelopment/SoftwarePages/MLMSoftware';
import TradingSoftware from './Component/WebApplicationDevelopment/SoftwarePages/TradingSoftware';
import JobPortalSoftware from './Component/WebApplicationDevelopment/SoftwarePages/JobPortalSoftware';
import CabBookingApps from './Component/WebApplicationDevelopment/ApplicationPages/CabBookingApps';
import GroceryApps from './Component/WebApplicationDevelopment/ApplicationPages/GroceryApps';
import TravellingApps from './Component/WebApplicationDevelopment/ApplicationPages/TravellingApps';
import ChattingApps from './Component/WebApplicationDevelopment/ApplicationPages/ChattingApps';
import FitnessApps from './Component/WebApplicationDevelopment/ApplicationPages/FitnessApps';
import RentalApps from './Component/WebApplicationDevelopment/ApplicationPages/RentalApps';
import DatingApps from './Component/WebApplicationDevelopment/ApplicationPages/DatingApps';
import AstrologyApps from './Component/WebApplicationDevelopment/ApplicationPages/AstrologyApps';
import FooddeliveryApps from './Component/WebApplicationDevelopment/ApplicationPages/FooddeliveryApps';
import SocialMediaApps from './Component/WebApplicationDevelopment/ApplicationPages/SocialMediaApps';
import LearningManagmentApps from './Component/WebApplicationDevelopment/ApplicationPages/LearningManagmentApps';
import EcommerceApps from './Component/WebApplicationDevelopment/ApplicationPages/EcommerceApps';
import MultivendorHomeServiceApps from './Component/WebApplicationDevelopment/ApplicationPages/MultivendorHomeServiceApps';
import MetaverseDevelopment from './Component/MetaversDevelopment/MetaverseDevelopment';
import MetaverseGameDevelopment from './Component/MetaversDevelopment/MetaverseGameDevelopment';
import MetaverseAvatarDevelopment from './Component/MetaversDevelopment/MetaverseAvatarDevelopment';
import MetaverseLaunchpadDevelopment from './Component/MetaversDevelopment/MetaverseLaunchpadDevelopment';
import MetaverseNFTMarketplaceDevelopment from './Component/MetaversDevelopment/Metaverse NFTMarketplaceDevelopment';
import MetaverseVirtualShowroomDevelopment from './Component/MetaversDevelopment/MetaverseVirtualShowroomDevelopment';
import MetaverseEventPlatformDevelopment from './Component/MetaversDevelopment/MetaverseEventPlatformDevelopment/MetaverseEventPlatformDevelopment';
import MetaverseSocialMediaPlatformDevelopment from './Component/MetaversDevelopment/MetaverseSocialMediaPlatformDevelopment';
import MetaverseRealEstateDevelopment from './Component/MetaversDevelopment/MetaverseRealEstateDevelopment';
import MetaverseVirtualLandDevelopment from './Component/MetaversDevelopment/MetaverseVirtualLandDevelopment';
import ContectUsForm from './Component/Insights/ContectUsForm/ContectUsForm';
import InsightsFAQ from './Component/Insights/InsightsFAQ/InsightsFAQ';
import PrivacyPolicy from './privacyPolicy/privacyPolicy';
import TermAndCondition from './TermAndCondition/TermAndCondition';
import CaseStudy from './Case Study/CaseStudy';
import Aboutus from './Component/Insights/company/About/Aboutus';
import Celebrations from './Component/Insights/company/Celebrations/Celebrations';
import Announcement from './Component/Insights/company/Announcement/Announcement';
import Product from './Component/Insights/company/Announcement/Product';
import News from './Component/Insights/company/Announcement/News';
import Blog from './Component/blogs/Blog';
import MainNews from './Component/Insights/company/News/MainNews';
import WbsiteDevelopment from './Component/websitedevelopment/WbsiteDevelopment';
import Static from './Component/websitedevelopment/Static';
import DynamicWebsite from './Component/websitedevelopment/DynamicWebsite';
import Ecommerce from './Component/websitedevelopment/Ecommerce';
import GeneralGamesDevelopment from './Component/gaming/gernralgames/GeneralGamesDevelopment';
import CasinoGames from './Component/gaming/CasinoGames/CasinoGames';
import MetaverseGame from './Component/gaming/metaversgame/MetaverseGame';
import Blockchain from './Component/gaming/blockchaingame/BlockchainGame';
import BlockchainGame from './Component/gaming/blockchaingame/BlockchainGame';
import SmartContractDevelopemnt from './Component/blockchain/BlockChainDevelopment/SmartContract/SmartContractDevelopemnt';
import PrivatePublicBlockchain from './Component/blockchain/BlockChainDevelopment/privatepublicblockchain/PrivatePublicBlockchain';
import DaoBlockchain from './Component/blockchain/BlockChainDevelopment/DAOBlockchainDevelopmnent/DaoBlockchain';
import WhitePaperWrittingServices from './Component/blockchain/Walletdevelopmen/WhitePaperWrittingServices/WhitePaperWrittingServices/WhitePaperWritting/WhitePaperWrittingServices';
import EthereumTokenDevelopment from './Component/blockchain/tokendevelopment/EthereumToken/EthereumTokenDevelopment';
import DefiStaking from './Component/blockchain/DeFiDevelopment/DeFiStakingPlatformDevelopment/DefiStaking';
import NFTMarketplace from './Component/blockchain/NFTDevelopment/NFTMarketplaceDevelopment/NFTMarketplace';
import NFTToken from './Component/blockchain/NFTDevelopment/NFTTokenDevelopment/NFTToken';
import WhiteLabel from './Component/blockchain/DEXDevelopment/WhiteLabelExchange/WhiteLabel';
import BlockchainSupply from './Component/blockchain/BlockChainDevelopment/BlockchainSupplyChain/BlockchainSupply';
import BlockchainVoting from './Component/blockchain/BlockChainDevelopment/BlockchaininVoting/BlockchainVoting';
import BlockchainLiveAution from './Component/blockchain/BlockChainDevelopment/BlockchaininLiveAution/BlockchainLiveAution';
import BlockchainDocument from './Component/blockchain/BlockChainDevelopment/BlockchainDocumentVerifiction/BlockchainDocument';
import BlockchainIdentityVerifiction from './Component/blockchain/BlockChainDevelopment/BlockchainIdentityVerifiction/BlockchainIdentityVerifiction';
import TrustWalletCloneDevelopment from './Component/blockchain/Walletdevelopmen/TrustWalletCloneDevelopment/TrustWalletCloneDevelopment';
import WalletConnectClone from './Component/blockchain/Walletdevelopmen/WalletConnectClone/WalletConnectClone';
import BinanaceSmartChainBEP20TokenDevelopment from './Component/blockchain/tokendevelopment/Binanace Smart Chain BEP20 Token Development/BinanaceSmartChainBEP20TokenDevelopment';
import SemiFungibleTokenDevelopment from './Component/blockchain/tokendevelopment/Semi -Fungible Token Development/SemiFungibleTokenDevelopment';
import PancakeswapExchange from './Component/blockchain/DEXDevelopment/PancakeswapExchangeCloneDevelopment/PancakeswapExchange';
import DeFiTokenDevelopment from './Component/blockchain/DeFiDevelopment/DeFiTokenDevelopment/DeFiTokenDevelopment';
import DeFiWalletDevelopment from './Component/blockchain/DeFiDevelopment/DeFiWalletDevelopment/DeFiWalletDevelopment';
import DeFiSmartContractDevelopment from './Component/blockchain/DeFiDevelopment/DeFi Smart Contract Development/DeFiSmartContractDevelopment';
import DeFiDAppsDevelopment from './Component/blockchain/DeFiDevelopment/DeFi DApps Development/DeFiDAppsDevelopment';
import DeFiInsuranceDevelopment from './Component/blockchain/DeFiDevelopment/DeFi Insurance Development/DeFiInsuranceDevelopment';
import SushiSwapExchange from './Component/blockchain/DEXDevelopment/SushiSwapExchangeClone/SushiSwapExchange';
import UniswapExchange from './Component/blockchain/DEXDevelopment/UniswapExchangeCloneDevelopemnt/UniswapExchange';
import LunchpadDevelopment from './Component/blockchain/LaunchpadDevelopment/LunchpadDevelopment/LunchpadDevelopment';
import GameFiLaunchapd from './Component/blockchain/LaunchpadDevelopment/GameFiLaunchapd/GameFiLaunchapd';
import PolygonNFT from './Component/blockchain/NFTDevelopment/PolygonNFTMarketplace/PolygonNFT';
import NFTLendingPlatform from './Component/blockchain/NFTDevelopment/NFTLendingPlatform/NFTLendingPlatform';
import BinanceNFT from './Component/blockchain/NFTDevelopment/BinanceNFTMarketplace/BinanceNFT';
import NFTMintingDevelopment from './Component/blockchain/NFTDevelopment/NFTMintingDevelopment/NFTMintingDevelopment';
import NFTArtMarketplaceDevelopment from './Component/blockchain/NFTDevelopment/NFTArtMarketplaceDevelopment/NFTArtMarketplaceDevelopment';
import NFTMusicMarketplaceDevelopment from './Component/blockchain/NFTDevelopment/NFTMusicMarketplaceDevelopment/NFTMusicMarketplaceDevelopment';
import NFTCrosschainPlatfromDevelopment from './Component/blockchain/NFTDevelopment/NFTCrosschainPlatfromDevelopment/NFTCrosschainPlatfromDevelopment';
import NFTFantasySportsPlatformDevelopment from './Component/blockchain/NFTDevelopment/NFTFantasySportsPlatformDevelopment/NFTFantasySportsPlatformDevelopment';
import MainBlockchain from './Component/blockchain/mainblockchain/MainBlockchain';

const AllRouteFiles = () => {
    return (
        <>
            <BrowserRouter>
                <div className="App">
                    <Navbar />
                    {/* <Main/> */}
                    {/* <WebApplicationMainPage/>
      <About />
      <Footer /> */}
                    {/* <TimeandSlider/> */}
                    {/* <CardSlider/> */}
                    {/* <OnDemandAppSlider/> */}
                    <Routes>

                    <Route path='/' element={ <Main/>}/>
       <Route path='Aboutus' element={<Aboutus/>}/>
       <Route path='Celebrations' element={<Celebrations/>}/>
       <Route path='/Announcement' element={<Announcement/>}/>
       <Route path="/Product/:productId" element={<Product />} />
       <Route path="/Productnews/:productnewsId" element={<Product />} />
       <Route path='/Product' element={<Product />}/>
       <Route path='/News' element={<MainNews />}/>
       <Route path='/Blog' element={<Blog />}/>

                        {/* Software pages */}
                        
                        <Route path=' AccountingBillingSoftware' element={<AccountingBillingSoftware />} />
                        <Route path='ERPSoftware' element={<ERPSoftware />} />
                        <Route path='SAASSoftware' element={<SAASSoftware />} />
                        <Route path='WarehouseManagmentSoftware' element={<WarehouseManagmentSoftware />} />
                        <Route path='HRMSSoftware' element={<HRMSSoftware />} />
                        <Route path='InventoryManagmentSoftware' element={<InventoryManagmentSoftware />} />
                        <Route path='POSSystemSoftware' element={<POSSystemSoftware />} />
                        <Route path='EmployeeTrackingSoftware' element={<EmployeeTrackingSoftware />} />
                        <Route path='AttendanceSystemSoftware' element={<AttendanceSystemSoftware />} />
                        <Route path='LibraryManagmentSystem' element={<LibraryManagmentSystem />} />
                        <Route path='LMSWithLiveClassSoftware' element={<LMSWithLiveClassSoftware />} />
                        <Route path='UniversityManagmentSoftware' element={<UniversityManagmentSoftware />} />
                        <Route path='QuizSystemSoftware' element={<QuizSystemSoftware />} />

                        {/* Software pages-1 */}

                        <Route path='AstrologySoftware' element={<AstrologySoftware />} />
                        <Route path='TravelBookingSoftware' element={<TravelBookingSoftware />} />
                        <Route path='MatrimonialSoftware' element={<MatrimonialSoftware />} />
                        <Route path='RestaurantManagmentSystemSoftware' element={<RestaurantManagmentSystemSoftware />} />
                        <Route path='HotelManagmentSoftware' element={<HotelManagmentSoftware />} />
                        <Route path='EventmanagementSoftware' element={<EventmanagementSoftware />} />
                        <Route path='HospitalManagmentSystemSoftware' element={<HospitalManagmentSystemSoftware />} />
                        <Route path='RealstateSoftware' element={<RealstateSoftware />} />
                        <Route path='ClinicManagmentSystemSoftware' element={<ClinicManagmentSystemSoftware />} />
                        <Route path='MLMSoftware' element={<MLMSoftware />} />
                        <Route path='TradingSoftware' element={<TradingSoftware />} />
                        <Route path='JobPortalSoftware' element={<JobPortalSoftware />} />

                        {/* Application Pages  */}

                        <Route path='CabBookingApps' element={<CabBookingApps />} />
                        <Route path='GroceryApps' element={<GroceryApps />} />
                        <Route path='TravellingApps' element={<TravellingApps />} />
                        <Route path='ChattingApps' element={<ChattingApps />} />
                        <Route path='FitnessApps' element={<FitnessApps />} />
                        <Route path='RentalApps' element={<RentalApps />} />
                        <Route path='DatingApps' element={<DatingApps />} />
                        <Route path='AstrologyApps' element={<AstrologyApps />} />
                        <Route path='FooddeliveryApps' element={<FooddeliveryApps />} />
                        <Route path='SocialMediaApps' element={<SocialMediaApps />} />
                        <Route path='LearningManagmentApps' element={<LearningManagmentApps />} />
                        <Route path='EcommerceApps' element={<EcommerceApps />} />
                        <Route path='MultivendorHomeServiceApps' element={<MultivendorHomeServiceApps />} />


                        {/* Metaverse Pages */}

                        <Route path='MetaverseDevelopment' element={<MetaverseDevelopment />} />
                        <Route path='MetaverseGameDevelopment' element={<MetaverseGameDevelopment />} />
                        <Route path='MetaverseNFTMarketplaceDevelopment' element={<MetaverseNFTMarketplaceDevelopment />} />
                        <Route path='MetaverseVirtualShowroomDevelopment' element={<MetaverseVirtualShowroomDevelopment />} />
                        <Route path='MetaverseEventPlatformDevelopment' element={<MetaverseEventPlatformDevelopment />} />
                        <Route path='MetaverseAvatarDevelopment' element={<MetaverseAvatarDevelopment />} />
                        <Route path='MetaverseSocialMediaPlatformDevelopment' element={<MetaverseSocialMediaPlatformDevelopment />} />
                        <Route path='MetaverseRealEstateDevelopment' element={<MetaverseRealEstateDevelopment />} />
                        <Route path='MetaverseVirtualLandDevelopment' element={<MetaverseVirtualLandDevelopment />} />
                        <Route path='MetaverseLaunchpadDevelopment' element={<MetaverseLaunchpadDevelopment />} />

                        {/*  Insights  */}

                        <Route path='ContectUsForm' element={<ContectUsForm />} />
                        <Route path='InsightsFAQ' element={<InsightsFAQ />} />

                        {/* privacyPolicy */}
                        <Route path='PrivacyPolicy' element={<PrivacyPolicy />} />
                        <Route path='TermAndCondition' element={<TermAndCondition />} />

                        {/* CaseStudy */}

                        <Route path='CaseStudy' element={<CaseStudy />} />

                        {/* ---website------ */}
                        
                               <Route path='/WbsiteDevelopment' element={<WbsiteDevelopment />} />
          <Route path='Blog' element={<Blog />} />
          <Route path='Static' element={<Static />} />
          <Route path='DynamicWebsite' element={<DynamicWebsite />} />
          <Route path='Ecommerce' element={ <Ecommerce /> } />
         
          <Route path='GeneralGamesDevelopment' element={<GeneralGamesDevelopment />} />
          <Route path='CasinoGames' element={<CasinoGames />} />
          <Route path='MetaverseGame' element={<MetaverseGame />} />
          <Route path='BlockchainGame' element={<BlockchainGame />} />
          <Route path='SmartContractDevelopemnt' element={<SmartContractDevelopemnt />} />
          <Route path='Private/PublicBlockchainDevelopment' element={<PrivatePublicBlockchain />} />
          <Route path='DAOBlockchainDevelopmnent' element={<DaoBlockchain/>} />
          <Route path='WhitePaperWrittingServices' element={<WhitePaperWrittingServices/>} />
          <Route path='EthereumTokenDevelopment' element={<EthereumTokenDevelopment/>} />
          {/* <Route path='/DefiStaking' element={<DefiStaking/>} /> */}
          
          <Route path='MainBlockchain' element={<MainBlockchain/>} />
          <Route path='BlockchainSupply' element={<BlockchainSupply/>} />
          <Route path='BlockchainVoting' element={<BlockchainVoting/>} />
          <Route path='BlockchainLiveAution' element={<BlockchainLiveAution/>} />
          <Route path='BlockchainDocument' element={<BlockchainDocument/>} />
          <Route path='BlockchainIdentityVerifiction' element={<BlockchainIdentityVerifiction/>} />
          <Route path='TrustWalletCloneDevelopment' element={<TrustWalletCloneDevelopment/>} />
          <Route path='WalletConnectClone' element={<WalletConnectClone />} />
          <Route path='SemiFungibleTokenDevelopment' element={<SemiFungibleTokenDevelopment />} />
          <Route path='BinanaceSmartChainBEP20TokenDevelopment' element={<BinanaceSmartChainBEP20TokenDevelopment />} />

                       {/* defi pages */}
          <Route path='DefiStaking' element={<DefiStaking />} />
          <Route path='DeFiTokenDevelopment' element={<DeFiTokenDevelopment />} />
          <Route path='DeFiWalletDevelopment' element={<DeFiWalletDevelopment />} />
          <Route path='DeFiSmartContractDevelopment' element={<DeFiSmartContractDevelopment />} />
          <Route path='DeFiDAppsDevelopment' element={<DeFiDAppsDevelopment />} />
          <Route path='DeFiInsuranceDevelopment' element={<DeFiInsuranceDevelopment />} />

                     {/* dex pages */}
          <Route path='WhiteLabel' element={<WhiteLabel />} />
          <Route path='PancakeswapExchange' element={<PancakeswapExchange />} />
          <Route path='SushiSwapExchange' element={<SushiSwapExchange />} />
          <Route path='UniswapExchange' element={<UniswapExchange />} />
          

                       {/* launch ped development  */}
          <Route path='GameFiLaunchapd' element={<GameFiLaunchapd />} />
          <Route path='LunchpadDevelopment' element={ <LunchpadDevelopment /> } />
          

                                {/* nft pages */}
          <Route path='NFTMarketplace' element={<NFTMarketplace/>} />
          <Route path='NFTToken' element={ <NFTToken /> } />
          <Route path='PolygonNFT' element={ <PolygonNFT /> } />
          <Route path='NFTLendingPlatform' element={ <NFTLendingPlatform /> } />
          <Route path='BinanceNFT' element={ <BinanceNFT /> } />
          <Route path='NFTCrosschainPlatfromDevelopment' element={ <NFTCrosschainPlatfromDevelopment /> } />
          <Route path='NFTMintingDevelopment' element={ <NFTMintingDevelopment /> } />
          <Route path='NFTArtMarketplaceDevelopment' element={ <NFTArtMarketplaceDevelopment /> } />
          <Route path='NFTMusicMarketplaceDevelopment' element={ <NFTMusicMarketplaceDevelopment /> } />
          <Route path='NFTFantasySportsPlatformDevelopment' element={ <NFTFantasySportsPlatformDevelopment /> } />

    

                    </Routes>


                </div>    
            </BrowserRouter>    
        </>        
    )
}
    export default AllRouteFiles