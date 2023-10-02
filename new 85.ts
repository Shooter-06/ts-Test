if (params.siteId) {
  return data;
}
//...
if (contentSection) {
  return data;
}
//...
if (contentItem) {
  return data;
}

private getSiteApiParams(url: string): SiteApiQueryParams {
  const regexp = /api\/admin\/site\/(\d+)(?:\/content-section\/(\d+)(?:\/content-item\/(\d+))?)?/;
  //...
}

get(siteId: number, contentSectionId: number): Observable<any> {
  return this.httpClient.get(`api/admin/site/${siteId}/content-section/${contentSectionId}`);
}

getAll(siteId: number): Observable<any[]> {
  return this.httpClient.get<any[]>(`api/admin/site/${siteId}/content-sections`);
}

save(siteId: number, contentSection: ContentSectionSaveDto): Observable<ContentSectionSaveDto | ContentSectionCreateUpdateResult> {
  if (contentSection.id) {
    return this.httpClient.put<ContentSectionSaveDto>(`api/admin/site/${siteId}/content-section/${contentSection.id}`, contentSection);
  } else {
    return this.httpClient.post<ContentSectionCreateUpdateResult>(`api/admin/site/${siteId}/content-section`, contentSection);
  }
}

delete(siteId: number, contentId: number): Observable<void> {
  return this.httpClient.delete<void>(`api/admin/site/${siteId}/content-sections/${contentId}`);
}

toFormModel(content: ContentSection): ContentSectionSaveDto {
  // ... (this looks fine)
}
