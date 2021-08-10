export class DataProviderXYZ {
    /**
     * In a data provider, in the way that I usually build them,
     * there are no more than 3 logical components to the
     * entire structure.
     *
     * 1: Means of data retrieval
     * 2: General Abstraction of the data
     * 3: Publish the data
     */
    /**
     * 1: Data Retrieval
     * By whatever means the application is set up to interface
     * with a source of data, this section of the class is where
     * that interface method would be defined.
     */
    /**
     * 2: General Abstraction
     * It's very likely that pieces of the application will be
     * interested in only very small portion of the data that
     * is present in the entire data struct that this provider
     * might interface with.  Since that's the case, it makes
     * sense to bite off little chunks of that data, and provide
     * that.  **Don't bother with state here**, that's not the job
     * of the provider.
     *
     * If you find yourself modifying data in this class, that's
     * likely a mistake.  Providing restructured, renamed data is
     * completely OK, but don't do it in the same place where you are
     * organizing the data 'pipe' from point A to points Z, Q, and L.
     */
    /**
     * 3: Publish Data
     * by some means, publish the data in it's raw form direct from
     * it's source, or in it's abstracted state.
     */
} 