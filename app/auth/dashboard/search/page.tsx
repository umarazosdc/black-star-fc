import ScoutBookmarks from '@/components/auth/scout-bookmarks';
import ScoutPreference from '@/components/auth/scout-preference';
import ScoutRequests from '@/components/auth/scout-requests';
import ScoutSuggestedPlayers from '@/components/auth/scout-suggested-player';
import SearchComponent from '@/components/utils/search-component';
import React from 'react';

const SearchPage = () => {
   return (
      <SearchComponent basePath='/auth/dashboard/search'>
         <ScoutPreference />
         <ScoutSuggestedPlayers />
         <ScoutRequests />
         <ScoutBookmarks />
      </SearchComponent>
   );
};

export default SearchPage;
