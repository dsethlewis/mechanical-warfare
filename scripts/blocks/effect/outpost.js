const outpost = extendContent(CoreBlock, "outpost", {
	// This "works" in the sense that it makes the block breakable, but it
	// has the side-effect of destroying most of a player's items in the
	// Core when the player breaks the Outpost.
	// canBreak(tile) {
 //        return true;
 //    },
    handleDamage(tile, amount) {},
});