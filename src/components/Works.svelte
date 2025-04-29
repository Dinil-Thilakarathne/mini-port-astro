<script lang="ts">
    import { worksData } from '../constants/data';
  </script>
  
  <div class="content-container">
    <h1 class="header-1">#Things I’ve Worked On</h1>
    <div class=" flex flex-col space-y-4 py-2">
      {#each worksData as  work ( work.title)}
        <div class=" work-card">
          <h2 class="font-semibold">
            {#if  work.link}
              <a href={ work.link} target="_blank">
                { work.title}:
              </a>
            {:else}
              { work.title}:
            {/if}
            <span class=" font-normal">
              { work.description}
            </span>
          </h2>
          <ul class=" list-disc pl-4">
              {#each  work.itemList as item (item)}
                  <li>
                      {item}
                  </li>
              {/each}
          </ul>
          {#if work.collaborators}
            <div class="flex ">
                <span>
                    Collabs with: 
                </span>
                <ul class="flex space-x-2 grow" style=" margin-left: 0.5rem">
                    {#each work.collaborators as collaborator (collaborator.name)}
                        <li class="inline-block">
                            <a href={collaborator.link}>{collaborator.name}</a>
                        </li>
                    {/each}
                </ul>
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
  