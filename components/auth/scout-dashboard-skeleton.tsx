// const DashboardPage = async () => {
//   return (
//     <div className="flex flex-col gap-6">
//       <header className="flex flex-col gap-6">
//         <p className="text-sm">
//           Welcome back, <b>{user?.name?.split(" ").slice(-1)}</b>
//         </p>
//         <SearchNotificationBar
//           placeholder="Search for player..."
//           basePath="/scout/dashboard"
//         />
//         <GridWrappers>
//           <Link href="/explore/requests">
//             <StatusCard value={totalRequests} name="Requests" />
//           </Link>

//           <Link href="/explore/bookmarks">
//             <StatusCard value={totalBookmarks} name="Bookmarks" />
//           </Link>
//         </GridWrappers>
//       </header>
//       <main className="flex flex-col gap-6">
//         {/* <Wrapper title="Upcoming event">
//                <EventStatusBar />
//             </Wrapper> */}
//         <SectionWrapper
//           title="Suggested Players"
//           link="/explore"
//           label="View all"
//         >
//           {!(suggestedPlayers.length > 0) ? (
//             <p className="text-sm text-muted-foreground">
//               We&#39;re scouting for the best players. We&#39;ll add players
//               soon...
//             </p>
//           ) : (
//             suggestedPlayers.map((player, key) => (
//               <SuggestedPlayersCard
//                 key={key}
//                 src={player.image}
//                 position={player.position}
//                 name={player.firstname + " " + player.lastname}
//                 age={getAge(player.dob)}
//                 id={player.id}
//                 className="w-[10.5rem]"
//               />
//             ))
//           )}
//         </SectionWrapper>
//         <SectionWrapper
//           title="Requested players"
//           link="/explore/requests"
//           label="View all"
//         >
//           {!(requestedPlayers.length > 0) ? (
//             <p className="text-sm text-muted-foreground">
//               You haven&#39;t yet requested for player...
//             </p>
//           ) : (
//             requestedPlayers.map((requestedPlayer, key) => (
//               <RequestedPlayerCard
//                 key={key}
//                 name={
//                   requestedPlayer.player.firstname +
//                   " " +
//                   requestedPlayer.player.lastname
//                 }
//                 position={requestedPlayer.player.position}
//                 src={requestedPlayer.player.image}
//                 age={requestedPlayer.player.age}
//                 id={requestedPlayer.playerId}
//                 className="w-[10.5rem]"
//               />
//             ))
//           )}
//         </SectionWrapper>
//         <SectionWrapper
//           title="Bookmarked players"
//           link="/explore/bookmarks"
//           label="View all"
//         >
//           {!(bookmarkedPlayers.length > 0) ? (
//             <p className="text-sm text-muted-foreground">
//               You haven&lsquo;t yet bookmarked player...
//             </p>
//           ) : (
//             bookmarkedPlayers.map((player, key) => (
//               <BookmarkedPlayerCard
//                 key={key}
//                 src={player.player.image}
//                 position={player.player.position}
//                 name={player.player.firstname + " " + player.player.lastname}
//                 age={getAge(player.player.dob)}
//                 id={player.player.id}
//                 className="w-[10.5rem]"
//               />
//             ))
//           )}
//         </SectionWrapper>
//       </main>
//     </div>
//   );
// };

// export default DashboardPage;
