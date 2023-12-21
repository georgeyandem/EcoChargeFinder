//import "/src/style.css";

async function fetchMapInfo(apiEndpoint) {
    try {
      const response = await fetch(apiEndpoint);
  
      if (!response.ok) {
        throw new Error(`HTTP error! }`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching map information', error);
      return null;
    }
  }
  const detailsView = {
    props: {
      // egenskaper  som behövs från API
      stationData: Object,
    },
    setup(props) {
      // Skapa en ref för att hålla mappinformationen
      const mapInfo = ref(null);
  
      // Metod för att göra API förfrågan och hämta mappinformation
      const fetchMapInfoData = async () => {
        const apiEndpoint = 'API_ENDPOINT_FOR_MAP_INFO'; 
        mapInfo.value = await fetchMapInfo(apiEndpoint);
      };
  
      // Anropa fetchMapInfoData när komponenten är monterad
      onMounted(fetchMapInfoData);
  
      return {
        mapInfo,
      };
    },
    methods: {
      goBack() {
        window.location.hash = "#/search";
      },
    },
  
  };
  export default detailsView;
